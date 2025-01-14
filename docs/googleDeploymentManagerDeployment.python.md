# `googleDeploymentManagerDeployment` Submodule <a name="`googleDeploymentManagerDeployment` Submodule" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeploymentManagerDeployment <a name="GoogleDeploymentManagerDeployment" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment google_deployment_manager_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment(
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
  target: GoogleDeploymentManagerDeploymentTarget,
  create_policy: str = None,
  delete_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Union[IResolvable, typing.List[GoogleDeploymentManagerDeploymentLabels]] = None,
  preview: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: GoogleDeploymentManagerDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for the deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.createPolicy">create_policy</a></code> | <code>str</code> | Set the policy to use for creating new resources. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.deletePolicy">delete_policy</a></code> | <code>str</code> | Set the policy to use for deleting new resources on update/delete. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional user-provided description of deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#id GoogleDeploymentManagerDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.preview">preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a deployment is created with "shell" resources that are not actually instantiated. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#project GoogleDeploymentManagerDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.name"></a>

- *Type:* str

Unique name for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#name GoogleDeploymentManagerDeployment#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#target GoogleDeploymentManagerDeployment#target}

---

##### `create_policy`<sup>Optional</sup> <a name="create_policy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.createPolicy"></a>

- *Type:* str

Set the policy to use for creating new resources.

Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#create_policy GoogleDeploymentManagerDeployment#create_policy}

---

##### `delete_policy`<sup>Optional</sup> <a name="delete_policy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.deletePolicy"></a>

- *Type:* str

Set the policy to use for deleting new resources on update/delete.

Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#delete_policy GoogleDeploymentManagerDeployment#delete_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.description"></a>

- *Type:* str

Optional user-provided description of deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#description GoogleDeploymentManagerDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#id GoogleDeploymentManagerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#labels GoogleDeploymentManagerDeployment#labels}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.preview"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a deployment is created with "shell" resources that are not actually instantiated.

This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#preview GoogleDeploymentManagerDeployment#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#project GoogleDeploymentManagerDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#timeouts GoogleDeploymentManagerDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetCreatePolicy">reset_create_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetDeletePolicy">reset_delete_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetPreview">reset_preview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_labels` <a name="put_labels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[GoogleDeploymentManagerDeploymentLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>]]

---

##### `put_target` <a name="put_target" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTarget"></a>

```python
def put_target(
  config: GoogleDeploymentManagerDeploymentTargetConfig,
  imports: typing.Union[IResolvable, typing.List[GoogleDeploymentManagerDeploymentTargetImports]] = None
) -> None
```

###### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTarget.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#config GoogleDeploymentManagerDeployment#config}

---

###### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTarget.parameter.imports"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>]]

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#imports GoogleDeploymentManagerDeployment#imports}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#create GoogleDeploymentManagerDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#delete GoogleDeploymentManagerDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#update GoogleDeploymentManagerDeployment#update}.

---

##### `reset_create_policy` <a name="reset_create_policy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetCreatePolicy"></a>

```python
def reset_create_policy() -> None
```

##### `reset_delete_policy` <a name="reset_delete_policy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetDeletePolicy"></a>

```python
def reset_delete_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_preview` <a name="reset_preview" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetPreview"></a>

```python
def reset_preview() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDeploymentManagerDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDeploymentManagerDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDeploymentManagerDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDeploymentManagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDeploymentManagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList">GoogleDeploymentManagerDeploymentLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.manifest">manifest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference">GoogleDeploymentManagerDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference">GoogleDeploymentManagerDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.createPolicyInput">create_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deletePolicyInput">delete_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.previewInput">preview_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.createPolicy">create_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deletePolicy">delete_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.preview">preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.labels"></a>

```python
labels: GoogleDeploymentManagerDeploymentLabelsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList">GoogleDeploymentManagerDeploymentLabelsList</a>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.manifest"></a>

```python
manifest: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.target"></a>

```python
target: GoogleDeploymentManagerDeploymentTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference">GoogleDeploymentManagerDeploymentTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.timeouts"></a>

```python
timeouts: GoogleDeploymentManagerDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference">GoogleDeploymentManagerDeploymentTimeoutsOutputReference</a>

---

##### `create_policy_input`<sup>Optional</sup> <a name="create_policy_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.createPolicyInput"></a>

```python
create_policy_input: str
```

- *Type:* str

---

##### `delete_policy_input`<sup>Optional</sup> <a name="delete_policy_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deletePolicyInput"></a>

```python
delete_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[GoogleDeploymentManagerDeploymentLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `preview_input`<sup>Optional</sup> <a name="preview_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.previewInput"></a>

```python
preview_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.targetInput"></a>

```python
target_input: GoogleDeploymentManagerDeploymentTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDeploymentManagerDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>]

---

##### `create_policy`<sup>Required</sup> <a name="create_policy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.createPolicy"></a>

```python
create_policy: str
```

- *Type:* str

---

##### `delete_policy`<sup>Required</sup> <a name="delete_policy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.deletePolicy"></a>

```python
delete_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.preview"></a>

```python
preview: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeploymentManagerDeploymentConfig <a name="GoogleDeploymentManagerDeploymentConfig" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  target: GoogleDeploymentManagerDeploymentTarget,
  create_policy: str = None,
  delete_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Union[IResolvable, typing.List[GoogleDeploymentManagerDeploymentLabels]] = None,
  preview: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: GoogleDeploymentManagerDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.name">name</a></code> | <code>str</code> | Unique name for the deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.createPolicy">create_policy</a></code> | <code>str</code> | Set the policy to use for creating new resources. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.deletePolicy">delete_policy</a></code> | <code>str</code> | Set the policy to use for deleting new resources on update/delete. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.description">description</a></code> | <code>str</code> | Optional user-provided description of deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#id GoogleDeploymentManagerDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.preview">preview</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a deployment is created with "shell" resources that are not actually instantiated. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#project GoogleDeploymentManagerDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#name GoogleDeploymentManagerDeployment#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.target"></a>

```python
target: GoogleDeploymentManagerDeploymentTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#target GoogleDeploymentManagerDeployment#target}

---

##### `create_policy`<sup>Optional</sup> <a name="create_policy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.createPolicy"></a>

```python
create_policy: str
```

- *Type:* str

Set the policy to use for creating new resources.

Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#create_policy GoogleDeploymentManagerDeployment#create_policy}

---

##### `delete_policy`<sup>Optional</sup> <a name="delete_policy" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.deletePolicy"></a>

```python
delete_policy: str
```

- *Type:* str

Set the policy to use for deleting new resources on update/delete.

Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#delete_policy GoogleDeploymentManagerDeployment#delete_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional user-provided description of deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#description GoogleDeploymentManagerDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#id GoogleDeploymentManagerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[GoogleDeploymentManagerDeploymentLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#labels GoogleDeploymentManagerDeployment#labels}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.preview"></a>

```python
preview: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a deployment is created with "shell" resources that are not actually instantiated.

This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#preview GoogleDeploymentManagerDeployment#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#project GoogleDeploymentManagerDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentConfig.property.timeouts"></a>

```python
timeouts: GoogleDeploymentManagerDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#timeouts GoogleDeploymentManagerDeployment#timeouts}

---

### GoogleDeploymentManagerDeploymentLabels <a name="GoogleDeploymentManagerDeploymentLabels" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.property.key">key</a></code> | <code>str</code> | Key for label. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.property.value">value</a></code> | <code>str</code> | Value of label. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.property.key"></a>

```python
key: str
```

- *Type:* str

Key for label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#key GoogleDeploymentManagerDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Value of label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#value GoogleDeploymentManagerDeployment#value}

---

### GoogleDeploymentManagerDeploymentTarget <a name="GoogleDeploymentManagerDeploymentTarget" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget(
  config: GoogleDeploymentManagerDeploymentTargetConfig,
  imports: typing.Union[IResolvable, typing.List[GoogleDeploymentManagerDeploymentTargetImports]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.property.imports">imports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>]]</code> | imports block. |

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.property.config"></a>

```python
config: GoogleDeploymentManagerDeploymentTargetConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#config GoogleDeploymentManagerDeployment#config}

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget.property.imports"></a>

```python
imports: typing.Union[IResolvable, typing.List[GoogleDeploymentManagerDeploymentTargetImports]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>]]

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#imports GoogleDeploymentManagerDeployment#imports}

---

### GoogleDeploymentManagerDeploymentTargetConfig <a name="GoogleDeploymentManagerDeploymentTargetConfig" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig(
  content: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig.property.content">content</a></code> | <code>str</code> | The full YAML contents of your configuration file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The full YAML contents of your configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#content GoogleDeploymentManagerDeployment#content}

---

### GoogleDeploymentManagerDeploymentTargetImports <a name="GoogleDeploymentManagerDeploymentTargetImports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports(
  content: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.property.content">content</a></code> | <code>str</code> | The full contents of the template that you want to import. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.property.name">name</a></code> | <code>str</code> | The name of the template to import, as declared in the YAML configuration. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.property.content"></a>

```python
content: str
```

- *Type:* str

The full contents of the template that you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#content GoogleDeploymentManagerDeployment#content}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the template to import, as declared in the YAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#name GoogleDeploymentManagerDeployment#name}

---

### GoogleDeploymentManagerDeploymentTimeouts <a name="GoogleDeploymentManagerDeploymentTimeouts" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#create GoogleDeploymentManagerDeployment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#delete GoogleDeploymentManagerDeployment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#update GoogleDeploymentManagerDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#create GoogleDeploymentManagerDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#delete GoogleDeploymentManagerDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#update GoogleDeploymentManagerDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeploymentManagerDeploymentLabelsList <a name="GoogleDeploymentManagerDeploymentLabelsList" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDeploymentManagerDeploymentLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDeploymentManagerDeploymentLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>]]

---


### GoogleDeploymentManagerDeploymentLabelsOutputReference <a name="GoogleDeploymentManagerDeploymentLabelsOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDeploymentManagerDeploymentLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentLabels">GoogleDeploymentManagerDeploymentLabels</a>]

---


### GoogleDeploymentManagerDeploymentTargetConfigOutputReference <a name="GoogleDeploymentManagerDeploymentTargetConfigOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDeploymentManagerDeploymentTargetConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a>

---


### GoogleDeploymentManagerDeploymentTargetImportsList <a name="GoogleDeploymentManagerDeploymentTargetImportsList" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDeploymentManagerDeploymentTargetImportsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDeploymentManagerDeploymentTargetImports]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>]]

---


### GoogleDeploymentManagerDeploymentTargetImportsOutputReference <a name="GoogleDeploymentManagerDeploymentTargetImportsOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDeploymentManagerDeploymentTargetImports]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>]

---


### GoogleDeploymentManagerDeploymentTargetOutputReference <a name="GoogleDeploymentManagerDeploymentTargetOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putImports">put_imports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resetImports">reset_imports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putConfig"></a>

```python
def put_config(
  content: str
) -> None
```

###### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putConfig.parameter.content"></a>

- *Type:* str

The full YAML contents of your configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_deployment_manager_deployment#content GoogleDeploymentManagerDeployment#content}

---

##### `put_imports` <a name="put_imports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putImports"></a>

```python
def put_imports(
  value: typing.Union[IResolvable, typing.List[GoogleDeploymentManagerDeploymentTargetImports]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.putImports.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>]]

---

##### `reset_imports` <a name="reset_imports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.resetImports"></a>

```python
def reset_imports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference">GoogleDeploymentManagerDeploymentTargetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.imports">imports</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList">GoogleDeploymentManagerDeploymentTargetImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.importsInput">imports_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.config"></a>

```python
config: GoogleDeploymentManagerDeploymentTargetConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfigOutputReference">GoogleDeploymentManagerDeploymentTargetConfigOutputReference</a>

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.imports"></a>

```python
imports: GoogleDeploymentManagerDeploymentTargetImportsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImportsList">GoogleDeploymentManagerDeploymentTargetImportsList</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.configInput"></a>

```python
config_input: GoogleDeploymentManagerDeploymentTargetConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetConfig">GoogleDeploymentManagerDeploymentTargetConfig</a>

---

##### `imports_input`<sup>Optional</sup> <a name="imports_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.importsInput"></a>

```python
imports_input: typing.Union[IResolvable, typing.List[GoogleDeploymentManagerDeploymentTargetImports]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetImports">GoogleDeploymentManagerDeploymentTargetImports</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTargetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDeploymentManagerDeploymentTarget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTarget">GoogleDeploymentManagerDeploymentTarget</a>

---


### GoogleDeploymentManagerDeploymentTimeoutsOutputReference <a name="GoogleDeploymentManagerDeploymentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_deployment_manager_deployment

googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDeploymentManagerDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDeploymentManagerDeployment.GoogleDeploymentManagerDeploymentTimeouts">GoogleDeploymentManagerDeploymentTimeouts</a>]

---



