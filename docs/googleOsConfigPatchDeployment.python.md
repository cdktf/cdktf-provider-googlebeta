# `googleOsConfigPatchDeployment` Submodule <a name="`googleOsConfigPatchDeployment` Submodule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOsConfigPatchDeployment <a name="GoogleOsConfigPatchDeployment" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment google_os_config_patch_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_filter: GoogleOsConfigPatchDeploymentInstanceFilter,
  patch_deployment_id: str,
  description: str = None,
  duration: str = None,
  id: str = None,
  one_time_schedule: GoogleOsConfigPatchDeploymentOneTimeSchedule = None,
  patch_config: GoogleOsConfigPatchDeploymentPatchConfig = None,
  project: str = None,
  recurring_schedule: GoogleOsConfigPatchDeploymentRecurringSchedule = None,
  rollout: GoogleOsConfigPatchDeploymentRollout = None,
  timeouts: GoogleOsConfigPatchDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.instanceFilter">instance_filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a></code> | instance_filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.patchDeploymentId">patch_deployment_id</a></code> | <code>str</code> | A name for the patch deployment in the project. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the patch deployment. Length of the description is limited to 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.duration">duration</a></code> | <code>str</code> | Duration of the patch. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#id GoogleOsConfigPatchDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.oneTimeSchedule">one_time_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a></code> | one_time_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.patchConfig">patch_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a></code> | patch_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#project GoogleOsConfigPatchDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.recurringSchedule">recurring_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a></code> | recurring_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.rollout">rollout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a></code> | rollout block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts">GoogleOsConfigPatchDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_filter`<sup>Required</sup> <a name="instance_filter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.instanceFilter"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a>

instance_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#instance_filter GoogleOsConfigPatchDeployment#instance_filter}

---

##### `patch_deployment_id`<sup>Required</sup> <a name="patch_deployment_id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.patchDeploymentId"></a>

- *Type:* str

A name for the patch deployment in the project.

When creating a name the following rules apply:

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#patch_deployment_id GoogleOsConfigPatchDeployment#patch_deployment_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.description"></a>

- *Type:* str

Description of the patch deployment. Length of the description is limited to 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#description GoogleOsConfigPatchDeployment#description}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.duration"></a>

- *Type:* str

Duration of the patch.

After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#duration GoogleOsConfigPatchDeployment#duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#id GoogleOsConfigPatchDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `one_time_schedule`<sup>Optional</sup> <a name="one_time_schedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.oneTimeSchedule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a>

one_time_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#one_time_schedule GoogleOsConfigPatchDeployment#one_time_schedule}

---

##### `patch_config`<sup>Optional</sup> <a name="patch_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.patchConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a>

patch_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#patch_config GoogleOsConfigPatchDeployment#patch_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#project GoogleOsConfigPatchDeployment#project}.

---

##### `recurring_schedule`<sup>Optional</sup> <a name="recurring_schedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.recurringSchedule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a>

recurring_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#recurring_schedule GoogleOsConfigPatchDeployment#recurring_schedule}

---

##### `rollout`<sup>Optional</sup> <a name="rollout" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.rollout"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a>

rollout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#rollout GoogleOsConfigPatchDeployment#rollout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts">GoogleOsConfigPatchDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#timeouts GoogleOsConfigPatchDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putInstanceFilter">put_instance_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putOneTimeSchedule">put_one_time_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig">put_patch_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRecurringSchedule">put_recurring_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRollout">put_rollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetOneTimeSchedule">reset_one_time_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetPatchConfig">reset_patch_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetRecurringSchedule">reset_recurring_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetRollout">reset_rollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_instance_filter` <a name="put_instance_filter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putInstanceFilter"></a>

```python
def put_instance_filter(
  all: typing.Union[bool, IResolvable] = None,
  group_labels: typing.Union[IResolvable, typing.List[GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels]] = None,
  instance_name_prefixes: typing.List[str] = None,
  instances: typing.List[str] = None,
  zones: typing.List[str] = None
) -> None
```

###### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putInstanceFilter.parameter.all"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Target all VM instances in the project. If true, no other criteria is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#all GoogleOsConfigPatchDeployment#all}

---

###### `group_labels`<sup>Optional</sup> <a name="group_labels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putInstanceFilter.parameter.groupLabels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels</a>]]

group_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#group_labels GoogleOsConfigPatchDeployment#group_labels}

---

###### `instance_name_prefixes`<sup>Optional</sup> <a name="instance_name_prefixes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putInstanceFilter.parameter.instanceNamePrefixes"></a>

- *Type:* typing.List[str]

Targets VMs whose name starts with one of these prefixes.

Similar to labels, this is another way to group
VMs when targeting configs, for example prefix="prod-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#instance_name_prefixes GoogleOsConfigPatchDeployment#instance_name_prefixes}

---

###### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putInstanceFilter.parameter.instances"></a>

- *Type:* typing.List[str]

Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}', 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#instances GoogleOsConfigPatchDeployment#instances}

---

###### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putInstanceFilter.parameter.zones"></a>

- *Type:* typing.List[str]

Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#zones GoogleOsConfigPatchDeployment#zones}

---

##### `put_one_time_schedule` <a name="put_one_time_schedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putOneTimeSchedule"></a>

```python
def put_one_time_schedule(
  execute_time: str
) -> None
```

###### `execute_time`<sup>Required</sup> <a name="execute_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putOneTimeSchedule.parameter.executeTime"></a>

- *Type:* str

The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#execute_time GoogleOsConfigPatchDeployment#execute_time}

---

##### `put_patch_config` <a name="put_patch_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig"></a>

```python
def put_patch_config(
  apt: GoogleOsConfigPatchDeploymentPatchConfigApt = None,
  goo: GoogleOsConfigPatchDeploymentPatchConfigGoo = None,
  mig_instances_allowed: typing.Union[bool, IResolvable] = None,
  post_step: GoogleOsConfigPatchDeploymentPatchConfigPostStep = None,
  pre_step: GoogleOsConfigPatchDeploymentPatchConfigPreStep = None,
  reboot_config: str = None,
  windows_update: GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate = None,
  yum: GoogleOsConfigPatchDeploymentPatchConfigYum = None,
  zypper: GoogleOsConfigPatchDeploymentPatchConfigZypper = None
) -> None
```

###### `apt`<sup>Optional</sup> <a name="apt" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig.parameter.apt"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a>

apt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#apt GoogleOsConfigPatchDeployment#apt}

---

###### `goo`<sup>Optional</sup> <a name="goo" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig.parameter.goo"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a>

goo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#goo GoogleOsConfigPatchDeployment#goo}

---

###### `mig_instances_allowed`<sup>Optional</sup> <a name="mig_instances_allowed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig.parameter.migInstancesAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows the patch job to run on Managed instance groups (MIGs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#mig_instances_allowed GoogleOsConfigPatchDeployment#mig_instances_allowed}

---

###### `post_step`<sup>Optional</sup> <a name="post_step" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig.parameter.postStep"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a>

post_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#post_step GoogleOsConfigPatchDeployment#post_step}

---

###### `pre_step`<sup>Optional</sup> <a name="pre_step" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig.parameter.preStep"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a>

pre_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#pre_step GoogleOsConfigPatchDeployment#pre_step}

---

###### `reboot_config`<sup>Optional</sup> <a name="reboot_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig.parameter.rebootConfig"></a>

- *Type:* str

Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#reboot_config GoogleOsConfigPatchDeployment#reboot_config}

---

###### `windows_update`<sup>Optional</sup> <a name="windows_update" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig.parameter.windowsUpdate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

windows_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#windows_update GoogleOsConfigPatchDeployment#windows_update}

---

###### `yum`<sup>Optional</sup> <a name="yum" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig.parameter.yum"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a>

yum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#yum GoogleOsConfigPatchDeployment#yum}

---

###### `zypper`<sup>Optional</sup> <a name="zypper" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putPatchConfig.parameter.zypper"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a>

zypper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#zypper GoogleOsConfigPatchDeployment#zypper}

---

##### `put_recurring_schedule` <a name="put_recurring_schedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRecurringSchedule"></a>

```python
def put_recurring_schedule(
  time_of_day: GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay,
  time_zone: GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone,
  end_time: str = None,
  monthly: GoogleOsConfigPatchDeploymentRecurringScheduleMonthly = None,
  start_time: str = None,
  weekly: GoogleOsConfigPatchDeploymentRecurringScheduleWeekly = None
) -> None
```

###### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRecurringSchedule.parameter.timeOfDay"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#time_of_day GoogleOsConfigPatchDeployment#time_of_day}

---

###### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRecurringSchedule.parameter.timeZone"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#time_zone GoogleOsConfigPatchDeployment#time_zone}

---

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRecurringSchedule.parameter.endTime"></a>

- *Type:* str

The end time at which a recurring patch deployment schedule is no longer active.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#end_time GoogleOsConfigPatchDeployment#end_time}

---

###### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRecurringSchedule.parameter.monthly"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a>

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#monthly GoogleOsConfigPatchDeployment#monthly}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRecurringSchedule.parameter.startTime"></a>

- *Type:* str

The time that the recurring schedule becomes effective.

Defaults to createTime of the patch deployment.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#start_time GoogleOsConfigPatchDeployment#start_time}

---

###### `weekly`<sup>Optional</sup> <a name="weekly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRecurringSchedule.parameter.weekly"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a>

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#weekly GoogleOsConfigPatchDeployment#weekly}

---

##### `put_rollout` <a name="put_rollout" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRollout"></a>

```python
def put_rollout(
  disruption_budget: GoogleOsConfigPatchDeploymentRolloutDisruptionBudget,
  mode: str
) -> None
```

###### `disruption_budget`<sup>Required</sup> <a name="disruption_budget" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRollout.parameter.disruptionBudget"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a>

disruption_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#disruption_budget GoogleOsConfigPatchDeployment#disruption_budget}

---

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putRollout.parameter.mode"></a>

- *Type:* str

Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#mode GoogleOsConfigPatchDeployment#mode}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#create GoogleOsConfigPatchDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#delete GoogleOsConfigPatchDeployment#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_one_time_schedule` <a name="reset_one_time_schedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetOneTimeSchedule"></a>

```python
def reset_one_time_schedule() -> None
```

##### `reset_patch_config` <a name="reset_patch_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetPatchConfig"></a>

```python
def reset_patch_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_recurring_schedule` <a name="reset_recurring_schedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetRecurringSchedule"></a>

```python
def reset_recurring_schedule() -> None
```

##### `reset_rollout` <a name="reset_rollout" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetRollout"></a>

```python
def reset_rollout() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleOsConfigPatchDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleOsConfigPatchDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleOsConfigPatchDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleOsConfigPatchDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOsConfigPatchDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.instanceFilter">instance_filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference">GoogleOsConfigPatchDeploymentInstanceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.lastExecuteTime">last_execute_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.oneTimeSchedule">one_time_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference">GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchConfig">patch_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.recurringSchedule">recurring_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.rollout">rollout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference">GoogleOsConfigPatchDeploymentRolloutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference">GoogleOsConfigPatchDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.instanceFilterInput">instance_filter_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.oneTimeScheduleInput">one_time_schedule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchConfigInput">patch_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchDeploymentIdInput">patch_deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.recurringScheduleInput">recurring_schedule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.rolloutInput">rollout_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts">GoogleOsConfigPatchDeploymentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchDeploymentId">patch_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `instance_filter`<sup>Required</sup> <a name="instance_filter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.instanceFilter"></a>

```python
instance_filter: GoogleOsConfigPatchDeploymentInstanceFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference">GoogleOsConfigPatchDeploymentInstanceFilterOutputReference</a>

---

##### `last_execute_time`<sup>Required</sup> <a name="last_execute_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.lastExecuteTime"></a>

```python
last_execute_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `one_time_schedule`<sup>Required</sup> <a name="one_time_schedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.oneTimeSchedule"></a>

```python
one_time_schedule: GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference">GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference</a>

---

##### `patch_config`<sup>Required</sup> <a name="patch_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchConfig"></a>

```python
patch_config: GoogleOsConfigPatchDeploymentPatchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigOutputReference</a>

---

##### `recurring_schedule`<sup>Required</sup> <a name="recurring_schedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.recurringSchedule"></a>

```python
recurring_schedule: GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference</a>

---

##### `rollout`<sup>Required</sup> <a name="rollout" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.rollout"></a>

```python
rollout: GoogleOsConfigPatchDeploymentRolloutOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference">GoogleOsConfigPatchDeploymentRolloutOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.timeouts"></a>

```python
timeouts: GoogleOsConfigPatchDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference">GoogleOsConfigPatchDeploymentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_filter_input`<sup>Optional</sup> <a name="instance_filter_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.instanceFilterInput"></a>

```python
instance_filter_input: GoogleOsConfigPatchDeploymentInstanceFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a>

---

##### `one_time_schedule_input`<sup>Optional</sup> <a name="one_time_schedule_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.oneTimeScheduleInput"></a>

```python
one_time_schedule_input: GoogleOsConfigPatchDeploymentOneTimeSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a>

---

##### `patch_config_input`<sup>Optional</sup> <a name="patch_config_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchConfigInput"></a>

```python
patch_config_input: GoogleOsConfigPatchDeploymentPatchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a>

---

##### `patch_deployment_id_input`<sup>Optional</sup> <a name="patch_deployment_id_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchDeploymentIdInput"></a>

```python
patch_deployment_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `recurring_schedule_input`<sup>Optional</sup> <a name="recurring_schedule_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.recurringScheduleInput"></a>

```python
recurring_schedule_input: GoogleOsConfigPatchDeploymentRecurringSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a>

---

##### `rollout_input`<sup>Optional</sup> <a name="rollout_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.rolloutInput"></a>

```python
rollout_input: GoogleOsConfigPatchDeploymentRollout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleOsConfigPatchDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts">GoogleOsConfigPatchDeploymentTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `patch_deployment_id`<sup>Required</sup> <a name="patch_deployment_id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.patchDeploymentId"></a>

```python
patch_deployment_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOsConfigPatchDeploymentConfig <a name="GoogleOsConfigPatchDeploymentConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_filter: GoogleOsConfigPatchDeploymentInstanceFilter,
  patch_deployment_id: str,
  description: str = None,
  duration: str = None,
  id: str = None,
  one_time_schedule: GoogleOsConfigPatchDeploymentOneTimeSchedule = None,
  patch_config: GoogleOsConfigPatchDeploymentPatchConfig = None,
  project: str = None,
  recurring_schedule: GoogleOsConfigPatchDeploymentRecurringSchedule = None,
  rollout: GoogleOsConfigPatchDeploymentRollout = None,
  timeouts: GoogleOsConfigPatchDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.instanceFilter">instance_filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a></code> | instance_filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.patchDeploymentId">patch_deployment_id</a></code> | <code>str</code> | A name for the patch deployment in the project. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.description">description</a></code> | <code>str</code> | Description of the patch deployment. Length of the description is limited to 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.duration">duration</a></code> | <code>str</code> | Duration of the patch. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#id GoogleOsConfigPatchDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.oneTimeSchedule">one_time_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a></code> | one_time_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.patchConfig">patch_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a></code> | patch_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#project GoogleOsConfigPatchDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.recurringSchedule">recurring_schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a></code> | recurring_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.rollout">rollout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a></code> | rollout block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts">GoogleOsConfigPatchDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_filter`<sup>Required</sup> <a name="instance_filter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.instanceFilter"></a>

```python
instance_filter: GoogleOsConfigPatchDeploymentInstanceFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a>

instance_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#instance_filter GoogleOsConfigPatchDeployment#instance_filter}

---

##### `patch_deployment_id`<sup>Required</sup> <a name="patch_deployment_id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.patchDeploymentId"></a>

```python
patch_deployment_id: str
```

- *Type:* str

A name for the patch deployment in the project.

When creating a name the following rules apply:

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#patch_deployment_id GoogleOsConfigPatchDeployment#patch_deployment_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the patch deployment. Length of the description is limited to 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#description GoogleOsConfigPatchDeployment#description}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.duration"></a>

```python
duration: str
```

- *Type:* str

Duration of the patch.

After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#duration GoogleOsConfigPatchDeployment#duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#id GoogleOsConfigPatchDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `one_time_schedule`<sup>Optional</sup> <a name="one_time_schedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.oneTimeSchedule"></a>

```python
one_time_schedule: GoogleOsConfigPatchDeploymentOneTimeSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a>

one_time_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#one_time_schedule GoogleOsConfigPatchDeployment#one_time_schedule}

---

##### `patch_config`<sup>Optional</sup> <a name="patch_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.patchConfig"></a>

```python
patch_config: GoogleOsConfigPatchDeploymentPatchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a>

patch_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#patch_config GoogleOsConfigPatchDeployment#patch_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#project GoogleOsConfigPatchDeployment#project}.

---

##### `recurring_schedule`<sup>Optional</sup> <a name="recurring_schedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.recurringSchedule"></a>

```python
recurring_schedule: GoogleOsConfigPatchDeploymentRecurringSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a>

recurring_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#recurring_schedule GoogleOsConfigPatchDeployment#recurring_schedule}

---

##### `rollout`<sup>Optional</sup> <a name="rollout" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.rollout"></a>

```python
rollout: GoogleOsConfigPatchDeploymentRollout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a>

rollout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#rollout GoogleOsConfigPatchDeployment#rollout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentConfig.property.timeouts"></a>

```python
timeouts: GoogleOsConfigPatchDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts">GoogleOsConfigPatchDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#timeouts GoogleOsConfigPatchDeployment#timeouts}

---

### GoogleOsConfigPatchDeploymentInstanceFilter <a name="GoogleOsConfigPatchDeploymentInstanceFilter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter(
  all: typing.Union[bool, IResolvable] = None,
  group_labels: typing.Union[IResolvable, typing.List[GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels]] = None,
  instance_name_prefixes: typing.List[str] = None,
  instances: typing.List[str] = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Target all VM instances in the project. If true, no other criteria is permitted. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.groupLabels">group_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels</a>]]</code> | group_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.instanceNamePrefixes">instance_name_prefixes</a></code> | <code>typing.List[str]</code> | Targets VMs whose name starts with one of these prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.instances">instances</a></code> | <code>typing.List[str]</code> | Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}', 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.zones">zones</a></code> | <code>typing.List[str]</code> | Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Target all VM instances in the project. If true, no other criteria is permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#all GoogleOsConfigPatchDeployment#all}

---

##### `group_labels`<sup>Optional</sup> <a name="group_labels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.groupLabels"></a>

```python
group_labels: typing.Union[IResolvable, typing.List[GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels</a>]]

group_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#group_labels GoogleOsConfigPatchDeployment#group_labels}

---

##### `instance_name_prefixes`<sup>Optional</sup> <a name="instance_name_prefixes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.instanceNamePrefixes"></a>

```python
instance_name_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Targets VMs whose name starts with one of these prefixes.

Similar to labels, this is another way to group
VMs when targeting configs, for example prefix="prod-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#instance_name_prefixes GoogleOsConfigPatchDeployment#instance_name_prefixes}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}', 'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or 'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#instances GoogleOsConfigPatchDeployment#instances}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#zones GoogleOsConfigPatchDeployment#zones}

---

### GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels <a name="GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels(
  labels: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Compute Engine instance labels that must be present for a VM instance to be targeted by this filter. |

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#labels GoogleOsConfigPatchDeployment#labels}

---

### GoogleOsConfigPatchDeploymentOneTimeSchedule <a name="GoogleOsConfigPatchDeploymentOneTimeSchedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule(
  execute_time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule.property.executeTime">execute_time</a></code> | <code>str</code> | The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". |

---

##### `execute_time`<sup>Required</sup> <a name="execute_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule.property.executeTime"></a>

```python
execute_time: str
```

- *Type:* str

The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#execute_time GoogleOsConfigPatchDeployment#execute_time}

---

### GoogleOsConfigPatchDeploymentPatchConfig <a name="GoogleOsConfigPatchDeploymentPatchConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig(
  apt: GoogleOsConfigPatchDeploymentPatchConfigApt = None,
  goo: GoogleOsConfigPatchDeploymentPatchConfigGoo = None,
  mig_instances_allowed: typing.Union[bool, IResolvable] = None,
  post_step: GoogleOsConfigPatchDeploymentPatchConfigPostStep = None,
  pre_step: GoogleOsConfigPatchDeploymentPatchConfigPreStep = None,
  reboot_config: str = None,
  windows_update: GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate = None,
  yum: GoogleOsConfigPatchDeploymentPatchConfigYum = None,
  zypper: GoogleOsConfigPatchDeploymentPatchConfigZypper = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.apt">apt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a></code> | apt block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.goo">goo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a></code> | goo block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.migInstancesAllowed">mig_instances_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows the patch job to run on Managed instance groups (MIGs). |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.postStep">post_step</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a></code> | post_step block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.preStep">pre_step</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a></code> | pre_step block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.rebootConfig">reboot_config</a></code> | <code>str</code> | Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.windowsUpdate">windows_update</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | windows_update block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.yum">yum</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a></code> | yum block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.zypper">zypper</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a></code> | zypper block. |

---

##### `apt`<sup>Optional</sup> <a name="apt" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.apt"></a>

```python
apt: GoogleOsConfigPatchDeploymentPatchConfigApt
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a>

apt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#apt GoogleOsConfigPatchDeployment#apt}

---

##### `goo`<sup>Optional</sup> <a name="goo" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.goo"></a>

```python
goo: GoogleOsConfigPatchDeploymentPatchConfigGoo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a>

goo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#goo GoogleOsConfigPatchDeployment#goo}

---

##### `mig_instances_allowed`<sup>Optional</sup> <a name="mig_instances_allowed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.migInstancesAllowed"></a>

```python
mig_instances_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows the patch job to run on Managed instance groups (MIGs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#mig_instances_allowed GoogleOsConfigPatchDeployment#mig_instances_allowed}

---

##### `post_step`<sup>Optional</sup> <a name="post_step" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.postStep"></a>

```python
post_step: GoogleOsConfigPatchDeploymentPatchConfigPostStep
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a>

post_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#post_step GoogleOsConfigPatchDeployment#post_step}

---

##### `pre_step`<sup>Optional</sup> <a name="pre_step" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.preStep"></a>

```python
pre_step: GoogleOsConfigPatchDeploymentPatchConfigPreStep
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a>

pre_step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#pre_step GoogleOsConfigPatchDeployment#pre_step}

---

##### `reboot_config`<sup>Optional</sup> <a name="reboot_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.rebootConfig"></a>

```python
reboot_config: str
```

- *Type:* str

Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#reboot_config GoogleOsConfigPatchDeployment#reboot_config}

---

##### `windows_update`<sup>Optional</sup> <a name="windows_update" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.windowsUpdate"></a>

```python
windows_update: GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

windows_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#windows_update GoogleOsConfigPatchDeployment#windows_update}

---

##### `yum`<sup>Optional</sup> <a name="yum" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.yum"></a>

```python
yum: GoogleOsConfigPatchDeploymentPatchConfigYum
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a>

yum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#yum GoogleOsConfigPatchDeployment#yum}

---

##### `zypper`<sup>Optional</sup> <a name="zypper" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig.property.zypper"></a>

```python
zypper: GoogleOsConfigPatchDeploymentPatchConfigZypper
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a>

zypper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#zypper GoogleOsConfigPatchDeployment#zypper}

---

### GoogleOsConfigPatchDeploymentPatchConfigApt <a name="GoogleOsConfigPatchDeploymentPatchConfigApt" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt(
  excludes: typing.List[str] = None,
  exclusive_packages: typing.List[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | List of packages to exclude from update. These packages will be excluded. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.property.exclusivePackages">exclusive_packages</a></code> | <code>typing.List[str]</code> | An exclusive list of packages to be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.property.type">type</a></code> | <code>str</code> | By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"]. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

List of packages to exclude from update. These packages will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}

---

##### `exclusive_packages`<sup>Optional</sup> <a name="exclusive_packages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.property.exclusivePackages"></a>

```python
exclusive_packages: typing.List[str]
```

- *Type:* typing.List[str]

An exclusive list of packages to be updated.

These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#exclusive_packages GoogleOsConfigPatchDeployment#exclusive_packages}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt.property.type"></a>

```python
type: str
```

- *Type:* str

By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#type GoogleOsConfigPatchDeployment#type}

---

### GoogleOsConfigPatchDeploymentPatchConfigGoo <a name="GoogleOsConfigPatchDeploymentPatchConfigGoo" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | goo update settings. Use this setting to override the default goo patch rules. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

goo update settings. Use this setting to override the default goo patch rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#enabled GoogleOsConfigPatchDeployment#enabled}

---

### GoogleOsConfigPatchDeploymentPatchConfigPostStep <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStep" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep(
  linux_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig = None,
  windows_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep.property.linuxExecStepConfig">linux_exec_step_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | linux_exec_step_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep.property.windowsExecStepConfig">windows_exec_step_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | windows_exec_step_config block. |

---

##### `linux_exec_step_config`<sup>Optional</sup> <a name="linux_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep.property.linuxExecStepConfig"></a>

```python
linux_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

linux_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#linux_exec_step_config GoogleOsConfigPatchDeployment#linux_exec_step_config}

---

##### `windows_exec_step_config`<sup>Optional</sup> <a name="windows_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep.property.windowsExecStepConfig"></a>

```python
windows_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

windows_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#windows_exec_step_config GoogleOsConfigPatchDeployment#windows_exec_step_config}

---

### GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig(
  allowed_success_codes: typing.List[typing.Union[int, float]] = None,
  gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject = None,
  interpreter: str = None,
  local_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.allowedSuccessCodes">allowed_success_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.gcsObject">gcs_object</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.interpreter">interpreter</a></code> | <code>str</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.localPath">local_path</a></code> | <code>str</code> | An absolute path to the executable on the VM. |

---

##### `allowed_success_codes`<sup>Optional</sup> <a name="allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.allowedSuccessCodes"></a>

```python
allowed_success_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}

---

##### `gcs_object`<sup>Optional</sup> <a name="gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.gcsObject"></a>

```python
gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}

---

##### `interpreter`<sup>Optional</sup> <a name="interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.interpreter"></a>

```python
interpreter: str
```

- *Type:* str

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}

---

##### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}

---

### GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject(
  bucket: str,
  generation_number: str,
  object: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.bucket">bucket</a></code> | <code>str</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.generationNumber">generation_number</a></code> | <code>str</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.object">object</a></code> | <code>str</code> | Name of the Cloud Storage object. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}

---

##### `generation_number`<sup>Required</sup> <a name="generation_number" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.generationNumber"></a>

```python
generation_number: str
```

- *Type:* str

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject.property.object"></a>

```python
object: str
```

- *Type:* str

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}

---

### GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig(
  allowed_success_codes: typing.List[typing.Union[int, float]] = None,
  gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject = None,
  interpreter: str = None,
  local_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.allowedSuccessCodes">allowed_success_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.gcsObject">gcs_object</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.interpreter">interpreter</a></code> | <code>str</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.localPath">local_path</a></code> | <code>str</code> | An absolute path to the executable on the VM. |

---

##### `allowed_success_codes`<sup>Optional</sup> <a name="allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.allowedSuccessCodes"></a>

```python
allowed_success_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}

---

##### `gcs_object`<sup>Optional</sup> <a name="gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.gcsObject"></a>

```python
gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}

---

##### `interpreter`<sup>Optional</sup> <a name="interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.interpreter"></a>

```python
interpreter: str
```

- *Type:* str

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}

---

##### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}

---

### GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject(
  bucket: str,
  generation_number: str,
  object: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.bucket">bucket</a></code> | <code>str</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.generationNumber">generation_number</a></code> | <code>str</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.object">object</a></code> | <code>str</code> | Name of the Cloud Storage object. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}

---

##### `generation_number`<sup>Required</sup> <a name="generation_number" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.generationNumber"></a>

```python
generation_number: str
```

- *Type:* str

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject.property.object"></a>

```python
object: str
```

- *Type:* str

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}

---

### GoogleOsConfigPatchDeploymentPatchConfigPreStep <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStep" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep(
  linux_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig = None,
  windows_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep.property.linuxExecStepConfig">linux_exec_step_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | linux_exec_step_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep.property.windowsExecStepConfig">windows_exec_step_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | windows_exec_step_config block. |

---

##### `linux_exec_step_config`<sup>Optional</sup> <a name="linux_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep.property.linuxExecStepConfig"></a>

```python
linux_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

linux_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#linux_exec_step_config GoogleOsConfigPatchDeployment#linux_exec_step_config}

---

##### `windows_exec_step_config`<sup>Optional</sup> <a name="windows_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep.property.windowsExecStepConfig"></a>

```python
windows_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

windows_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#windows_exec_step_config GoogleOsConfigPatchDeployment#windows_exec_step_config}

---

### GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig(
  allowed_success_codes: typing.List[typing.Union[int, float]] = None,
  gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject = None,
  interpreter: str = None,
  local_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.allowedSuccessCodes">allowed_success_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.gcsObject">gcs_object</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.interpreter">interpreter</a></code> | <code>str</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.localPath">local_path</a></code> | <code>str</code> | An absolute path to the executable on the VM. |

---

##### `allowed_success_codes`<sup>Optional</sup> <a name="allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.allowedSuccessCodes"></a>

```python
allowed_success_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}

---

##### `gcs_object`<sup>Optional</sup> <a name="gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.gcsObject"></a>

```python
gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}

---

##### `interpreter`<sup>Optional</sup> <a name="interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.interpreter"></a>

```python
interpreter: str
```

- *Type:* str

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}

---

##### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}

---

### GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject(
  bucket: str,
  generation_number: str,
  object: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.bucket">bucket</a></code> | <code>str</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.generationNumber">generation_number</a></code> | <code>str</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.object">object</a></code> | <code>str</code> | Name of the Cloud Storage object. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}

---

##### `generation_number`<sup>Required</sup> <a name="generation_number" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.generationNumber"></a>

```python
generation_number: str
```

- *Type:* str

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject.property.object"></a>

```python
object: str
```

- *Type:* str

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}

---

### GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig(
  allowed_success_codes: typing.List[typing.Union[int, float]] = None,
  gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject = None,
  interpreter: str = None,
  local_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.allowedSuccessCodes">allowed_success_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Defaults to [0]. A list of possible return values that the execution can return to indicate a success. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.gcsObject">gcs_object</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | gcs_object block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.interpreter">interpreter</a></code> | <code>str</code> | The script interpreter to use to run the script. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.localPath">local_path</a></code> | <code>str</code> | An absolute path to the executable on the VM. |

---

##### `allowed_success_codes`<sup>Optional</sup> <a name="allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.allowedSuccessCodes"></a>

```python
allowed_success_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}

---

##### `gcs_object`<sup>Optional</sup> <a name="gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.gcsObject"></a>

```python
gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}

---

##### `interpreter`<sup>Optional</sup> <a name="interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.interpreter"></a>

```python
interpreter: str
```

- *Type:* str

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}

---

##### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}

---

### GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject(
  bucket: str,
  generation_number: str,
  object: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.bucket">bucket</a></code> | <code>str</code> | Bucket of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.generationNumber">generation_number</a></code> | <code>str</code> | Generation number of the Cloud Storage object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.object">object</a></code> | <code>str</code> | Name of the Cloud Storage object. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}

---

##### `generation_number`<sup>Required</sup> <a name="generation_number" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.generationNumber"></a>

```python
generation_number: str
```

- *Type:* str

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject.property.object"></a>

```python
object: str
```

- *Type:* str

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}

---

### GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate <a name="GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate(
  classifications: typing.List[str] = None,
  excludes: typing.List[str] = None,
  exclusive_patches: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.property.classifications">classifications</a></code> | <code>typing.List[str]</code> | Only apply updates of these windows update classifications. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | List of KBs to exclude from update. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.property.exclusivePatches">exclusive_patches</a></code> | <code>typing.List[str]</code> | An exclusive list of kbs to be updated. |

---

##### `classifications`<sup>Optional</sup> <a name="classifications" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.property.classifications"></a>

```python
classifications: typing.List[str]
```

- *Type:* typing.List[str]

Only apply updates of these windows update classifications.

If empty, all updates are applied. Possible values: ["CRITICAL", "SECURITY", "DEFINITION", "DRIVER", "FEATURE_PACK", "SERVICE_PACK", "TOOL", "UPDATE_ROLLUP", "UPDATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#classifications GoogleOsConfigPatchDeployment#classifications}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

List of KBs to exclude from update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}

---

##### `exclusive_patches`<sup>Optional</sup> <a name="exclusive_patches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate.property.exclusivePatches"></a>

```python
exclusive_patches: typing.List[str]
```

- *Type:* typing.List[str]

An exclusive list of kbs to be updated.

These are the only patches that will be updated.
This field must not be used with other patch configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#exclusive_patches GoogleOsConfigPatchDeployment#exclusive_patches}

---

### GoogleOsConfigPatchDeploymentPatchConfigYum <a name="GoogleOsConfigPatchDeploymentPatchConfigYum" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum(
  excludes: typing.List[str] = None,
  exclusive_packages: typing.List[str] = None,
  minimal: typing.Union[bool, IResolvable] = None,
  security: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | List of packages to exclude from update. These packages will be excluded. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.exclusivePackages">exclusive_packages</a></code> | <code>typing.List[str]</code> | An exclusive list of packages to be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.minimal">minimal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Will cause patch to run yum update-minimal instead. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.security">security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Adds the --security flag to yum update. Not supported on all platforms. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

List of packages to exclude from update. These packages will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}

---

##### `exclusive_packages`<sup>Optional</sup> <a name="exclusive_packages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.exclusivePackages"></a>

```python
exclusive_packages: typing.List[str]
```

- *Type:* typing.List[str]

An exclusive list of packages to be updated.

These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#exclusive_packages GoogleOsConfigPatchDeployment#exclusive_packages}

---

##### `minimal`<sup>Optional</sup> <a name="minimal" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.minimal"></a>

```python
minimal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Will cause patch to run yum update-minimal instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#minimal GoogleOsConfigPatchDeployment#minimal}

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum.property.security"></a>

```python
security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Adds the --security flag to yum update. Not supported on all platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#security GoogleOsConfigPatchDeployment#security}

---

### GoogleOsConfigPatchDeploymentPatchConfigZypper <a name="GoogleOsConfigPatchDeploymentPatchConfigZypper" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper(
  categories: typing.List[str] = None,
  excludes: typing.List[str] = None,
  exclusive_patches: typing.List[str] = None,
  severities: typing.List[str] = None,
  with_optional: typing.Union[bool, IResolvable] = None,
  with_update: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.categories">categories</a></code> | <code>typing.List[str]</code> | Install only patches with these categories. Common categories include security, recommended, and feature. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | List of packages to exclude from update. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.exclusivePatches">exclusive_patches</a></code> | <code>typing.List[str]</code> | An exclusive list of patches to be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.severities">severities</a></code> | <code>typing.List[str]</code> | Install only patches with these severities. Common severities include critical, important, moderate, and low. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.withOptional">with_optional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Adds the --with-optional flag to zypper patch. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.withUpdate">with_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Adds the --with-update flag, to zypper patch. |

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

Install only patches with these categories. Common categories include security, recommended, and feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#categories GoogleOsConfigPatchDeployment#categories}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

List of packages to exclude from update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}

---

##### `exclusive_patches`<sup>Optional</sup> <a name="exclusive_patches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.exclusivePatches"></a>

```python
exclusive_patches: typing.List[str]
```

- *Type:* typing.List[str]

An exclusive list of patches to be updated.

These are the only patches that will be installed using 'zypper patch patch:' command.
This field must not be used with any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#exclusive_patches GoogleOsConfigPatchDeployment#exclusive_patches}

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

Install only patches with these severities. Common severities include critical, important, moderate, and low.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#severities GoogleOsConfigPatchDeployment#severities}

---

##### `with_optional`<sup>Optional</sup> <a name="with_optional" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.withOptional"></a>

```python
with_optional: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Adds the --with-optional flag to zypper patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#with_optional GoogleOsConfigPatchDeployment#with_optional}

---

##### `with_update`<sup>Optional</sup> <a name="with_update" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper.property.withUpdate"></a>

```python
with_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Adds the --with-update flag, to zypper patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#with_update GoogleOsConfigPatchDeployment#with_update}

---

### GoogleOsConfigPatchDeploymentRecurringSchedule <a name="GoogleOsConfigPatchDeploymentRecurringSchedule" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule(
  time_of_day: GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay,
  time_zone: GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone,
  end_time: str = None,
  monthly: GoogleOsConfigPatchDeploymentRecurringScheduleMonthly = None,
  start_time: str = None,
  weekly: GoogleOsConfigPatchDeploymentRecurringScheduleWeekly = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.timeOfDay">time_of_day</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | time_of_day block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.timeZone">time_zone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | time_zone block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.endTime">end_time</a></code> | <code>str</code> | The end time at which a recurring patch deployment schedule is no longer active. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.monthly">monthly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | monthly block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.startTime">start_time</a></code> | <code>str</code> | The time that the recurring schedule becomes effective. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.weekly">weekly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | weekly block. |

---

##### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.timeOfDay"></a>

```python
time_of_day: GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#time_of_day GoogleOsConfigPatchDeployment#time_of_day}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.timeZone"></a>

```python
time_zone: GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#time_zone GoogleOsConfigPatchDeployment#time_zone}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The end time at which a recurring patch deployment schedule is no longer active.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#end_time GoogleOsConfigPatchDeployment#end_time}

---

##### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.monthly"></a>

```python
monthly: GoogleOsConfigPatchDeploymentRecurringScheduleMonthly
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a>

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#monthly GoogleOsConfigPatchDeployment#monthly}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The time that the recurring schedule becomes effective.

Defaults to createTime of the patch deployment.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#start_time GoogleOsConfigPatchDeployment#start_time}

---

##### `weekly`<sup>Optional</sup> <a name="weekly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule.property.weekly"></a>

```python
weekly: GoogleOsConfigPatchDeploymentRecurringScheduleWeekly
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a>

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#weekly GoogleOsConfigPatchDeployment#weekly}

---

### GoogleOsConfigPatchDeploymentRecurringScheduleMonthly <a name="GoogleOsConfigPatchDeploymentRecurringScheduleMonthly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly(
  month_day: typing.Union[int, float] = None,
  week_day_of_month: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly.property.monthDay">month_day</a></code> | <code>typing.Union[int, float]</code> | One day of the month. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly.property.weekDayOfMonth">week_day_of_month</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | week_day_of_month block. |

---

##### `month_day`<sup>Optional</sup> <a name="month_day" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly.property.monthDay"></a>

```python
month_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

One day of the month.

1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#month_day GoogleOsConfigPatchDeployment#month_day}

---

##### `week_day_of_month`<sup>Optional</sup> <a name="week_day_of_month" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly.property.weekDayOfMonth"></a>

```python
week_day_of_month: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

week_day_of_month block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#week_day_of_month GoogleOsConfigPatchDeployment#week_day_of_month}

---

### GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth <a name="GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth(
  day_of_week: str,
  week_ordinal: typing.Union[int, float],
  day_offset: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.weekOrdinal">week_ordinal</a></code> | <code>typing.Union[int, float]</code> | Week number in a month. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOffset">day_offset</a></code> | <code>typing.Union[int, float]</code> | Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#day_of_week GoogleOsConfigPatchDeployment#day_of_week}

---

##### `week_ordinal`<sup>Required</sup> <a name="week_ordinal" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.weekOrdinal"></a>

```python
week_ordinal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Week number in a month.

1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#week_ordinal GoogleOsConfigPatchDeployment#week_ordinal}

---

##### `day_offset`<sup>Optional</sup> <a name="day_offset" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth.property.dayOffset"></a>

```python
day_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents the number of days before or after the given week day of month that the patch deployment is scheduled for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#day_offset GoogleOsConfigPatchDeployment#day_offset}

---

### GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay <a name="GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#hours GoogleOsConfigPatchDeployment#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#minutes GoogleOsConfigPatchDeployment#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#nanos GoogleOsConfigPatchDeployment#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of minutes of the time.

Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#seconds GoogleOsConfigPatchDeployment#seconds}

---

### GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone <a name="GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone(
  id: str,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone.property.id">id</a></code> | <code>str</code> | IANA Time Zone Database time zone, e.g. "America/New_York". |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone.property.version">version</a></code> | <code>str</code> | IANA Time Zone Database version number, e.g. "2019a". |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone.property.id"></a>

```python
id: str
```

- *Type:* str

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#id GoogleOsConfigPatchDeployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone.property.version"></a>

```python
version: str
```

- *Type:* str

IANA Time Zone Database version number, e.g. "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#version GoogleOsConfigPatchDeployment#version}

---

### GoogleOsConfigPatchDeploymentRecurringScheduleWeekly <a name="GoogleOsConfigPatchDeploymentRecurringScheduleWeekly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly(
  day_of_week: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#day_of_week GoogleOsConfigPatchDeployment#day_of_week}

---

### GoogleOsConfigPatchDeploymentRollout <a name="GoogleOsConfigPatchDeploymentRollout" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout(
  disruption_budget: GoogleOsConfigPatchDeploymentRolloutDisruptionBudget,
  mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout.property.disruptionBudget">disruption_budget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | disruption_budget block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout.property.mode">mode</a></code> | <code>str</code> | Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"]. |

---

##### `disruption_budget`<sup>Required</sup> <a name="disruption_budget" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout.property.disruptionBudget"></a>

```python
disruption_budget: GoogleOsConfigPatchDeploymentRolloutDisruptionBudget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a>

disruption_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#disruption_budget GoogleOsConfigPatchDeployment#disruption_budget}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout.property.mode"></a>

```python
mode: str
```

- *Type:* str

Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#mode GoogleOsConfigPatchDeployment#mode}

---

### GoogleOsConfigPatchDeploymentRolloutDisruptionBudget <a name="GoogleOsConfigPatchDeploymentRolloutDisruptionBudget" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget(
  fixed: typing.Union[int, float] = None,
  percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget.property.fixed">fixed</a></code> | <code>typing.Union[int, float]</code> | Specifies a fixed value. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | Specifies the relative value defined as a percentage, which will be multiplied by a reference value. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget.property.fixed"></a>

```python
fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies a fixed value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#fixed GoogleOsConfigPatchDeployment#fixed}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the relative value defined as a percentage, which will be multiplied by a reference value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#percentage GoogleOsConfigPatchDeployment#percentage}

---

### GoogleOsConfigPatchDeploymentTimeouts <a name="GoogleOsConfigPatchDeploymentTimeouts" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#create GoogleOsConfigPatchDeployment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#delete GoogleOsConfigPatchDeployment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#create GoogleOsConfigPatchDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#delete GoogleOsConfigPatchDeployment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList <a name="GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels</a>]]

---


### GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference <a name="GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels</a>]

---


### GoogleOsConfigPatchDeploymentInstanceFilterOutputReference <a name="GoogleOsConfigPatchDeploymentInstanceFilterOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels">put_group_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetAll">reset_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetGroupLabels">reset_group_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetInstanceNamePrefixes">reset_instance_name_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetInstances">reset_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetZones">reset_zones</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_group_labels` <a name="put_group_labels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels"></a>

```python
def put_group_labels(
  value: typing.Union[IResolvable, typing.List[GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.putGroupLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels</a>]]

---

##### `reset_all` <a name="reset_all" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetAll"></a>

```python
def reset_all() -> None
```

##### `reset_group_labels` <a name="reset_group_labels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetGroupLabels"></a>

```python
def reset_group_labels() -> None
```

##### `reset_instance_name_prefixes` <a name="reset_instance_name_prefixes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetInstanceNamePrefixes"></a>

```python
def reset_instance_name_prefixes() -> None
```

##### `reset_instances` <a name="reset_instances" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetInstances"></a>

```python
def reset_instances() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.resetZones"></a>

```python
def reset_zones() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabels">group_labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.allInput">all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabelsInput">group_labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixesInput">instance_name_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instancesInput">instances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.all">all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixes">instance_name_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instances">instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_labels`<sup>Required</sup> <a name="group_labels" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabels"></a>

```python
group_labels: GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabelsList</a>

---

##### `all_input`<sup>Optional</sup> <a name="all_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.allInput"></a>

```python
all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_labels_input`<sup>Optional</sup> <a name="group_labels_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.groupLabelsInput"></a>

```python
group_labels_input: typing.Union[IResolvable, typing.List[GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels">GoogleOsConfigPatchDeploymentInstanceFilterGroupLabels</a>]]

---

##### `instance_name_prefixes_input`<sup>Optional</sup> <a name="instance_name_prefixes_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixesInput"></a>

```python
instance_name_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instancesInput"></a>

```python
instances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.all"></a>

```python
all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_name_prefixes`<sup>Required</sup> <a name="instance_name_prefixes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instanceNamePrefixes"></a>

```python
instance_name_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentInstanceFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentInstanceFilter">GoogleOsConfigPatchDeploymentInstanceFilter</a>

---


### GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference <a name="GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTimeInput">execute_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTime">execute_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execute_time_input`<sup>Optional</sup> <a name="execute_time_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTimeInput"></a>

```python
execute_time_input: str
```

- *Type:* str

---

##### `execute_time`<sup>Required</sup> <a name="execute_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.executeTime"></a>

```python
execute_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentOneTimeSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentOneTimeSchedule">GoogleOsConfigPatchDeploymentOneTimeSchedule</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resetExclusivePackages">reset_exclusive_packages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excludes` <a name="reset_excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_exclusive_packages` <a name="reset_exclusive_packages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resetExclusivePackages"></a>

```python
def reset_exclusive_packages() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludesInput">excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackagesInput">exclusive_packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackages">exclusive_packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludesInput"></a>

```python
excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusive_packages_input`<sup>Optional</sup> <a name="exclusive_packages_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackagesInput"></a>

```python
exclusive_packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusive_packages`<sup>Required</sup> <a name="exclusive_packages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.exclusivePackages"></a>

```python
exclusive_packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigApt
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigGoo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putApt">put_apt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putGoo">put_goo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPostStep">put_post_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPreStep">put_pre_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate">put_windows_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putYum">put_yum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putZypper">put_zypper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetApt">reset_apt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetGoo">reset_goo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetMigInstancesAllowed">reset_mig_instances_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetPostStep">reset_post_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetPreStep">reset_pre_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetRebootConfig">reset_reboot_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetWindowsUpdate">reset_windows_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetYum">reset_yum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetZypper">reset_zypper</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_apt` <a name="put_apt" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putApt"></a>

```python
def put_apt(
  excludes: typing.List[str] = None,
  exclusive_packages: typing.List[str] = None,
  type: str = None
) -> None
```

###### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putApt.parameter.excludes"></a>

- *Type:* typing.List[str]

List of packages to exclude from update. These packages will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}

---

###### `exclusive_packages`<sup>Optional</sup> <a name="exclusive_packages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putApt.parameter.exclusivePackages"></a>

- *Type:* typing.List[str]

An exclusive list of packages to be updated.

These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#exclusive_packages GoogleOsConfigPatchDeployment#exclusive_packages}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putApt.parameter.type"></a>

- *Type:* str

By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#type GoogleOsConfigPatchDeployment#type}

---

##### `put_goo` <a name="put_goo" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putGoo"></a>

```python
def put_goo(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putGoo.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

goo update settings. Use this setting to override the default goo patch rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#enabled GoogleOsConfigPatchDeployment#enabled}

---

##### `put_post_step` <a name="put_post_step" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPostStep"></a>

```python
def put_post_step(
  linux_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig = None,
  windows_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig = None
) -> None
```

###### `linux_exec_step_config`<sup>Optional</sup> <a name="linux_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPostStep.parameter.linuxExecStepConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

linux_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#linux_exec_step_config GoogleOsConfigPatchDeployment#linux_exec_step_config}

---

###### `windows_exec_step_config`<sup>Optional</sup> <a name="windows_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPostStep.parameter.windowsExecStepConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

windows_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#windows_exec_step_config GoogleOsConfigPatchDeployment#windows_exec_step_config}

---

##### `put_pre_step` <a name="put_pre_step" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPreStep"></a>

```python
def put_pre_step(
  linux_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig = None,
  windows_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig = None
) -> None
```

###### `linux_exec_step_config`<sup>Optional</sup> <a name="linux_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPreStep.parameter.linuxExecStepConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

linux_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#linux_exec_step_config GoogleOsConfigPatchDeployment#linux_exec_step_config}

---

###### `windows_exec_step_config`<sup>Optional</sup> <a name="windows_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putPreStep.parameter.windowsExecStepConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

windows_exec_step_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#windows_exec_step_config GoogleOsConfigPatchDeployment#windows_exec_step_config}

---

##### `put_windows_update` <a name="put_windows_update" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate"></a>

```python
def put_windows_update(
  classifications: typing.List[str] = None,
  excludes: typing.List[str] = None,
  exclusive_patches: typing.List[str] = None
) -> None
```

###### `classifications`<sup>Optional</sup> <a name="classifications" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate.parameter.classifications"></a>

- *Type:* typing.List[str]

Only apply updates of these windows update classifications.

If empty, all updates are applied. Possible values: ["CRITICAL", "SECURITY", "DEFINITION", "DRIVER", "FEATURE_PACK", "SERVICE_PACK", "TOOL", "UPDATE_ROLLUP", "UPDATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#classifications GoogleOsConfigPatchDeployment#classifications}

---

###### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate.parameter.excludes"></a>

- *Type:* typing.List[str]

List of KBs to exclude from update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}

---

###### `exclusive_patches`<sup>Optional</sup> <a name="exclusive_patches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putWindowsUpdate.parameter.exclusivePatches"></a>

- *Type:* typing.List[str]

An exclusive list of kbs to be updated.

These are the only patches that will be updated.
This field must not be used with other patch configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#exclusive_patches GoogleOsConfigPatchDeployment#exclusive_patches}

---

##### `put_yum` <a name="put_yum" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putYum"></a>

```python
def put_yum(
  excludes: typing.List[str] = None,
  exclusive_packages: typing.List[str] = None,
  minimal: typing.Union[bool, IResolvable] = None,
  security: typing.Union[bool, IResolvable] = None
) -> None
```

###### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putYum.parameter.excludes"></a>

- *Type:* typing.List[str]

List of packages to exclude from update. These packages will be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}

---

###### `exclusive_packages`<sup>Optional</sup> <a name="exclusive_packages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putYum.parameter.exclusivePackages"></a>

- *Type:* typing.List[str]

An exclusive list of packages to be updated.

These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#exclusive_packages GoogleOsConfigPatchDeployment#exclusive_packages}

---

###### `minimal`<sup>Optional</sup> <a name="minimal" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putYum.parameter.minimal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Will cause patch to run yum update-minimal instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#minimal GoogleOsConfigPatchDeployment#minimal}

---

###### `security`<sup>Optional</sup> <a name="security" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putYum.parameter.security"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Adds the --security flag to yum update. Not supported on all platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#security GoogleOsConfigPatchDeployment#security}

---

##### `put_zypper` <a name="put_zypper" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putZypper"></a>

```python
def put_zypper(
  categories: typing.List[str] = None,
  excludes: typing.List[str] = None,
  exclusive_patches: typing.List[str] = None,
  severities: typing.List[str] = None,
  with_optional: typing.Union[bool, IResolvable] = None,
  with_update: typing.Union[bool, IResolvable] = None
) -> None
```

###### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putZypper.parameter.categories"></a>

- *Type:* typing.List[str]

Install only patches with these categories. Common categories include security, recommended, and feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#categories GoogleOsConfigPatchDeployment#categories}

---

###### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putZypper.parameter.excludes"></a>

- *Type:* typing.List[str]

List of packages to exclude from update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#excludes GoogleOsConfigPatchDeployment#excludes}

---

###### `exclusive_patches`<sup>Optional</sup> <a name="exclusive_patches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putZypper.parameter.exclusivePatches"></a>

- *Type:* typing.List[str]

An exclusive list of patches to be updated.

These are the only patches that will be installed using 'zypper patch patch:' command.
This field must not be used with any other patch configuration fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#exclusive_patches GoogleOsConfigPatchDeployment#exclusive_patches}

---

###### `severities`<sup>Optional</sup> <a name="severities" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putZypper.parameter.severities"></a>

- *Type:* typing.List[str]

Install only patches with these severities. Common severities include critical, important, moderate, and low.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#severities GoogleOsConfigPatchDeployment#severities}

---

###### `with_optional`<sup>Optional</sup> <a name="with_optional" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putZypper.parameter.withOptional"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Adds the --with-optional flag to zypper patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#with_optional GoogleOsConfigPatchDeployment#with_optional}

---

###### `with_update`<sup>Optional</sup> <a name="with_update" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.putZypper.parameter.withUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Adds the --with-update flag, to zypper patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#with_update GoogleOsConfigPatchDeployment#with_update}

---

##### `reset_apt` <a name="reset_apt" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetApt"></a>

```python
def reset_apt() -> None
```

##### `reset_goo` <a name="reset_goo" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetGoo"></a>

```python
def reset_goo() -> None
```

##### `reset_mig_instances_allowed` <a name="reset_mig_instances_allowed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetMigInstancesAllowed"></a>

```python
def reset_mig_instances_allowed() -> None
```

##### `reset_post_step` <a name="reset_post_step" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetPostStep"></a>

```python
def reset_post_step() -> None
```

##### `reset_pre_step` <a name="reset_pre_step" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetPreStep"></a>

```python
def reset_pre_step() -> None
```

##### `reset_reboot_config` <a name="reset_reboot_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetRebootConfig"></a>

```python
def reset_reboot_config() -> None
```

##### `reset_windows_update` <a name="reset_windows_update" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetWindowsUpdate"></a>

```python
def reset_windows_update() -> None
```

##### `reset_yum` <a name="reset_yum" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetYum"></a>

```python
def reset_yum() -> None
```

##### `reset_zypper` <a name="reset_zypper" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.resetZypper"></a>

```python
def reset_zypper() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.apt">apt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference">GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.goo">goo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference">GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.postStep">post_step</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.preStep">pre_step</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdate">windows_update</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.yum">yum</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference">GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.zypper">zypper</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference">GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.aptInput">apt_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.gooInput">goo_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowedInput">mig_instances_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.postStepInput">post_step_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.preStepInput">pre_step_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfigInput">reboot_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdateInput">windows_update_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.yumInput">yum_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.zypperInput">zypper_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowed">mig_instances_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfig">reboot_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apt`<sup>Required</sup> <a name="apt" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.apt"></a>

```python
apt: GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference">GoogleOsConfigPatchDeploymentPatchConfigAptOutputReference</a>

---

##### `goo`<sup>Required</sup> <a name="goo" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.goo"></a>

```python
goo: GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference">GoogleOsConfigPatchDeploymentPatchConfigGooOutputReference</a>

---

##### `post_step`<sup>Required</sup> <a name="post_step" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.postStep"></a>

```python
post_step: GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference</a>

---

##### `pre_step`<sup>Required</sup> <a name="pre_step" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.preStep"></a>

```python
pre_step: GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference</a>

---

##### `windows_update`<sup>Required</sup> <a name="windows_update" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdate"></a>

```python
windows_update: GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference</a>

---

##### `yum`<sup>Required</sup> <a name="yum" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.yum"></a>

```python
yum: GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference">GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference</a>

---

##### `zypper`<sup>Required</sup> <a name="zypper" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.zypper"></a>

```python
zypper: GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference">GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference</a>

---

##### `apt_input`<sup>Optional</sup> <a name="apt_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.aptInput"></a>

```python
apt_input: GoogleOsConfigPatchDeploymentPatchConfigApt
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigApt">GoogleOsConfigPatchDeploymentPatchConfigApt</a>

---

##### `goo_input`<sup>Optional</sup> <a name="goo_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.gooInput"></a>

```python
goo_input: GoogleOsConfigPatchDeploymentPatchConfigGoo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigGoo">GoogleOsConfigPatchDeploymentPatchConfigGoo</a>

---

##### `mig_instances_allowed_input`<sup>Optional</sup> <a name="mig_instances_allowed_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowedInput"></a>

```python
mig_instances_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `post_step_input`<sup>Optional</sup> <a name="post_step_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.postStepInput"></a>

```python
post_step_input: GoogleOsConfigPatchDeploymentPatchConfigPostStep
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a>

---

##### `pre_step_input`<sup>Optional</sup> <a name="pre_step_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.preStepInput"></a>

```python
pre_step_input: GoogleOsConfigPatchDeploymentPatchConfigPreStep
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a>

---

##### `reboot_config_input`<sup>Optional</sup> <a name="reboot_config_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfigInput"></a>

```python
reboot_config_input: str
```

- *Type:* str

---

##### `windows_update_input`<sup>Optional</sup> <a name="windows_update_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.windowsUpdateInput"></a>

```python
windows_update_input: GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---

##### `yum_input`<sup>Optional</sup> <a name="yum_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.yumInput"></a>

```python
yum_input: GoogleOsConfigPatchDeploymentPatchConfigYum
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a>

---

##### `zypper_input`<sup>Optional</sup> <a name="zypper_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.zypperInput"></a>

```python
zypper_input: GoogleOsConfigPatchDeploymentPatchConfigZypper
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a>

---

##### `mig_instances_allowed`<sup>Required</sup> <a name="mig_instances_allowed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.migInstancesAllowed"></a>

```python
mig_instances_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reboot_config`<sup>Required</sup> <a name="reboot_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.rebootConfig"></a>

```python
reboot_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfig">GoogleOsConfigPatchDeploymentPatchConfig</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput">generation_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber">generation_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `generation_number_input`<sup>Optional</sup> <a name="generation_number_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```python
generation_number_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `generation_number`<sup>Required</sup> <a name="generation_number" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```python
generation_number: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject">put_gcs_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes">reset_allowed_success_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetGcsObject">reset_gcs_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetInterpreter">reset_interpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetLocalPath">reset_local_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gcs_object` <a name="put_gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject"></a>

```python
def put_gcs_object(
  bucket: str,
  generation_number: str,
  object: str
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.bucket"></a>

- *Type:* str

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}

---

###### `generation_number`<sup>Required</sup> <a name="generation_number" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.generationNumber"></a>

- *Type:* str

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}

---

###### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.object"></a>

- *Type:* str

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}

---

##### `reset_allowed_success_codes` <a name="reset_allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```python
def reset_allowed_success_codes() -> None
```

##### `reset_gcs_object` <a name="reset_gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetGcsObject"></a>

```python
def reset_gcs_object() -> None
```

##### `reset_interpreter` <a name="reset_interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetInterpreter"></a>

```python
def reset_interpreter() -> None
```

##### `reset_local_path` <a name="reset_local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.resetLocalPath"></a>

```python
def reset_local_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObject">gcs_object</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput">allowed_success_codes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObjectInput">gcs_object_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreterInput">interpreter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes">allowed_success_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreter">interpreter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcs_object`<sup>Required</sup> <a name="gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObject"></a>

```python
gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference</a>

---

##### `allowed_success_codes_input`<sup>Optional</sup> <a name="allowed_success_codes_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```python
allowed_success_codes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `gcs_object_input`<sup>Optional</sup> <a name="gcs_object_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.gcsObjectInput"></a>

```python
gcs_object_input: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

---

##### `interpreter_input`<sup>Optional</sup> <a name="interpreter_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreterInput"></a>

```python
interpreter_input: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `allowed_success_codes`<sup>Required</sup> <a name="allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```python
allowed_success_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `interpreter`<sup>Required</sup> <a name="interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.interpreter"></a>

```python
interpreter: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig">put_linux_exec_step_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig">put_windows_exec_step_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetLinuxExecStepConfig">reset_linux_exec_step_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetWindowsExecStepConfig">reset_windows_exec_step_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_linux_exec_step_config` <a name="put_linux_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig"></a>

```python
def put_linux_exec_step_config(
  allowed_success_codes: typing.List[typing.Union[int, float]] = None,
  gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject = None,
  interpreter: str = None,
  local_path: str = None
) -> None
```

###### `allowed_success_codes`<sup>Optional</sup> <a name="allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig.parameter.allowedSuccessCodes"></a>

- *Type:* typing.List[typing.Union[int, float]]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}

---

###### `gcs_object`<sup>Optional</sup> <a name="gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig.parameter.gcsObject"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}

---

###### `interpreter`<sup>Optional</sup> <a name="interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig.parameter.interpreter"></a>

- *Type:* str

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}

---

###### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putLinuxExecStepConfig.parameter.localPath"></a>

- *Type:* str

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}

---

##### `put_windows_exec_step_config` <a name="put_windows_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig"></a>

```python
def put_windows_exec_step_config(
  allowed_success_codes: typing.List[typing.Union[int, float]] = None,
  gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject = None,
  interpreter: str = None,
  local_path: str = None
) -> None
```

###### `allowed_success_codes`<sup>Optional</sup> <a name="allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig.parameter.allowedSuccessCodes"></a>

- *Type:* typing.List[typing.Union[int, float]]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}

---

###### `gcs_object`<sup>Optional</sup> <a name="gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig.parameter.gcsObject"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}

---

###### `interpreter`<sup>Optional</sup> <a name="interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig.parameter.interpreter"></a>

- *Type:* str

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}

---

###### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.putWindowsExecStepConfig.parameter.localPath"></a>

- *Type:* str

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}

---

##### `reset_linux_exec_step_config` <a name="reset_linux_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetLinuxExecStepConfig"></a>

```python
def reset_linux_exec_step_config() -> None
```

##### `reset_windows_exec_step_config` <a name="reset_windows_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.resetWindowsExecStepConfig"></a>

```python
def reset_windows_exec_step_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfig">linux_exec_step_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfig">windows_exec_step_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfigInput">linux_exec_step_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfigInput">windows_exec_step_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linux_exec_step_config`<sup>Required</sup> <a name="linux_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfig"></a>

```python
linux_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference</a>

---

##### `windows_exec_step_config`<sup>Required</sup> <a name="windows_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfig"></a>

```python
windows_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference</a>

---

##### `linux_exec_step_config_input`<sup>Optional</sup> <a name="linux_exec_step_config_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.linuxExecStepConfigInput"></a>

```python
linux_exec_step_config_input: GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig</a>

---

##### `windows_exec_step_config_input`<sup>Optional</sup> <a name="windows_exec_step_config_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.windowsExecStepConfigInput"></a>

```python
windows_exec_step_config_input: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigPostStep
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStep">GoogleOsConfigPatchDeploymentPatchConfigPostStep</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput">generation_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber">generation_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `generation_number_input`<sup>Optional</sup> <a name="generation_number_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```python
generation_number_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `generation_number`<sup>Required</sup> <a name="generation_number" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```python
generation_number: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject">put_gcs_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes">reset_allowed_success_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetGcsObject">reset_gcs_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetInterpreter">reset_interpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetLocalPath">reset_local_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gcs_object` <a name="put_gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject"></a>

```python
def put_gcs_object(
  bucket: str,
  generation_number: str,
  object: str
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.bucket"></a>

- *Type:* str

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}

---

###### `generation_number`<sup>Required</sup> <a name="generation_number" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.generationNumber"></a>

- *Type:* str

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}

---

###### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.object"></a>

- *Type:* str

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}

---

##### `reset_allowed_success_codes` <a name="reset_allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```python
def reset_allowed_success_codes() -> None
```

##### `reset_gcs_object` <a name="reset_gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetGcsObject"></a>

```python
def reset_gcs_object() -> None
```

##### `reset_interpreter` <a name="reset_interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetInterpreter"></a>

```python
def reset_interpreter() -> None
```

##### `reset_local_path` <a name="reset_local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.resetLocalPath"></a>

```python
def reset_local_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObject">gcs_object</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput">allowed_success_codes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObjectInput">gcs_object_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreterInput">interpreter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes">allowed_success_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreter">interpreter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcs_object`<sup>Required</sup> <a name="gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObject"></a>

```python
gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference</a>

---

##### `allowed_success_codes_input`<sup>Optional</sup> <a name="allowed_success_codes_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```python
allowed_success_codes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `gcs_object_input`<sup>Optional</sup> <a name="gcs_object_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.gcsObjectInput"></a>

```python
gcs_object_input: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject</a>

---

##### `interpreter_input`<sup>Optional</sup> <a name="interpreter_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreterInput"></a>

```python
interpreter_input: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `allowed_success_codes`<sup>Required</sup> <a name="allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```python
allowed_success_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `interpreter`<sup>Required</sup> <a name="interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.interpreter"></a>

```python
interpreter: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput">generation_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber">generation_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `generation_number_input`<sup>Optional</sup> <a name="generation_number_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```python
generation_number_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `generation_number`<sup>Required</sup> <a name="generation_number" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```python
generation_number: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject">put_gcs_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes">reset_allowed_success_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetGcsObject">reset_gcs_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetInterpreter">reset_interpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetLocalPath">reset_local_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gcs_object` <a name="put_gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject"></a>

```python
def put_gcs_object(
  bucket: str,
  generation_number: str,
  object: str
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.bucket"></a>

- *Type:* str

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}

---

###### `generation_number`<sup>Required</sup> <a name="generation_number" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.generationNumber"></a>

- *Type:* str

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}

---

###### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.putGcsObject.parameter.object"></a>

- *Type:* str

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}

---

##### `reset_allowed_success_codes` <a name="reset_allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```python
def reset_allowed_success_codes() -> None
```

##### `reset_gcs_object` <a name="reset_gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetGcsObject"></a>

```python
def reset_gcs_object() -> None
```

##### `reset_interpreter` <a name="reset_interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetInterpreter"></a>

```python
def reset_interpreter() -> None
```

##### `reset_local_path` <a name="reset_local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.resetLocalPath"></a>

```python
def reset_local_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObject">gcs_object</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput">allowed_success_codes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObjectInput">gcs_object_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreterInput">interpreter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes">allowed_success_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreter">interpreter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcs_object`<sup>Required</sup> <a name="gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObject"></a>

```python
gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference</a>

---

##### `allowed_success_codes_input`<sup>Optional</sup> <a name="allowed_success_codes_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```python
allowed_success_codes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `gcs_object_input`<sup>Optional</sup> <a name="gcs_object_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.gcsObjectInput"></a>

```python
gcs_object_input: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

---

##### `interpreter_input`<sup>Optional</sup> <a name="interpreter_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreterInput"></a>

```python
interpreter_input: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `allowed_success_codes`<sup>Required</sup> <a name="allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```python
allowed_success_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `interpreter`<sup>Required</sup> <a name="interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.interpreter"></a>

```python
interpreter: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig">put_linux_exec_step_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig">put_windows_exec_step_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetLinuxExecStepConfig">reset_linux_exec_step_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetWindowsExecStepConfig">reset_windows_exec_step_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_linux_exec_step_config` <a name="put_linux_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig"></a>

```python
def put_linux_exec_step_config(
  allowed_success_codes: typing.List[typing.Union[int, float]] = None,
  gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject = None,
  interpreter: str = None,
  local_path: str = None
) -> None
```

###### `allowed_success_codes`<sup>Optional</sup> <a name="allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig.parameter.allowedSuccessCodes"></a>

- *Type:* typing.List[typing.Union[int, float]]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}

---

###### `gcs_object`<sup>Optional</sup> <a name="gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig.parameter.gcsObject"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}

---

###### `interpreter`<sup>Optional</sup> <a name="interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig.parameter.interpreter"></a>

- *Type:* str

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}

---

###### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putLinuxExecStepConfig.parameter.localPath"></a>

- *Type:* str

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}

---

##### `put_windows_exec_step_config` <a name="put_windows_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig"></a>

```python
def put_windows_exec_step_config(
  allowed_success_codes: typing.List[typing.Union[int, float]] = None,
  gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject = None,
  interpreter: str = None,
  local_path: str = None
) -> None
```

###### `allowed_success_codes`<sup>Optional</sup> <a name="allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig.parameter.allowedSuccessCodes"></a>

- *Type:* typing.List[typing.Union[int, float]]

Defaults to [0]. A list of possible return values that the execution can return to indicate a success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#allowed_success_codes GoogleOsConfigPatchDeployment#allowed_success_codes}

---

###### `gcs_object`<sup>Optional</sup> <a name="gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig.parameter.gcsObject"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

gcs_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#gcs_object GoogleOsConfigPatchDeployment#gcs_object}

---

###### `interpreter`<sup>Optional</sup> <a name="interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig.parameter.interpreter"></a>

- *Type:* str

The script interpreter to use to run the script.

If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#interpreter GoogleOsConfigPatchDeployment#interpreter}

---

###### `local_path`<sup>Optional</sup> <a name="local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.putWindowsExecStepConfig.parameter.localPath"></a>

- *Type:* str

An absolute path to the executable on the VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#local_path GoogleOsConfigPatchDeployment#local_path}

---

##### `reset_linux_exec_step_config` <a name="reset_linux_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetLinuxExecStepConfig"></a>

```python
def reset_linux_exec_step_config() -> None
```

##### `reset_windows_exec_step_config` <a name="reset_windows_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.resetWindowsExecStepConfig"></a>

```python
def reset_windows_exec_step_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfig">linux_exec_step_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfig">windows_exec_step_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfigInput">linux_exec_step_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfigInput">windows_exec_step_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linux_exec_step_config`<sup>Required</sup> <a name="linux_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfig"></a>

```python
linux_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference</a>

---

##### `windows_exec_step_config`<sup>Required</sup> <a name="windows_exec_step_config" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfig"></a>

```python
windows_exec_step_config: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference</a>

---

##### `linux_exec_step_config_input`<sup>Optional</sup> <a name="linux_exec_step_config_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.linuxExecStepConfigInput"></a>

```python
linux_exec_step_config_input: GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig</a>

---

##### `windows_exec_step_config_input`<sup>Optional</sup> <a name="windows_exec_step_config_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.windowsExecStepConfigInput"></a>

```python
windows_exec_step_config_input: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigPreStep
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStep">GoogleOsConfigPatchDeploymentPatchConfigPreStep</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput">generation_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber">generation_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `generation_number_input`<sup>Optional</sup> <a name="generation_number_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumberInput"></a>

```python
generation_number_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `generation_number`<sup>Required</sup> <a name="generation_number" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.generationNumber"></a>

```python
generation_number: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject">put_gcs_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes">reset_allowed_success_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetGcsObject">reset_gcs_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetInterpreter">reset_interpreter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetLocalPath">reset_local_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gcs_object` <a name="put_gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject"></a>

```python
def put_gcs_object(
  bucket: str,
  generation_number: str,
  object: str
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.bucket"></a>

- *Type:* str

Bucket of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#bucket GoogleOsConfigPatchDeployment#bucket}

---

###### `generation_number`<sup>Required</sup> <a name="generation_number" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.generationNumber"></a>

- *Type:* str

Generation number of the Cloud Storage object.

This is used to ensure that the ExecStep specified by this PatchJob does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#generation_number GoogleOsConfigPatchDeployment#generation_number}

---

###### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.putGcsObject.parameter.object"></a>

- *Type:* str

Name of the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#object GoogleOsConfigPatchDeployment#object}

---

##### `reset_allowed_success_codes` <a name="reset_allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetAllowedSuccessCodes"></a>

```python
def reset_allowed_success_codes() -> None
```

##### `reset_gcs_object` <a name="reset_gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetGcsObject"></a>

```python
def reset_gcs_object() -> None
```

##### `reset_interpreter` <a name="reset_interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetInterpreter"></a>

```python
def reset_interpreter() -> None
```

##### `reset_local_path` <a name="reset_local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.resetLocalPath"></a>

```python
def reset_local_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObject">gcs_object</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput">allowed_success_codes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObjectInput">gcs_object_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreterInput">interpreter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPathInput">local_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes">allowed_success_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreter">interpreter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcs_object`<sup>Required</sup> <a name="gcs_object" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObject"></a>

```python
gcs_object: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference</a>

---

##### `allowed_success_codes_input`<sup>Optional</sup> <a name="allowed_success_codes_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodesInput"></a>

```python
allowed_success_codes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `gcs_object_input`<sup>Optional</sup> <a name="gcs_object_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.gcsObjectInput"></a>

```python
gcs_object_input: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject</a>

---

##### `interpreter_input`<sup>Optional</sup> <a name="interpreter_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreterInput"></a>

```python
interpreter_input: str
```

- *Type:* str

---

##### `local_path_input`<sup>Optional</sup> <a name="local_path_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPathInput"></a>

```python
local_path_input: str
```

- *Type:* str

---

##### `allowed_success_codes`<sup>Required</sup> <a name="allowed_success_codes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.allowedSuccessCodes"></a>

```python
allowed_success_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `interpreter`<sup>Required</sup> <a name="interpreter" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.interpreter"></a>

```python
interpreter: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig">GoogleOsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetClassifications">reset_classifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExclusivePatches">reset_exclusive_patches</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classifications` <a name="reset_classifications" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetClassifications"></a>

```python
def reset_classifications() -> None
```

##### `reset_excludes` <a name="reset_excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_exclusive_patches` <a name="reset_exclusive_patches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.resetExclusivePatches"></a>

```python
def reset_exclusive_patches() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classificationsInput">classifications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludesInput">excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatchesInput">exclusive_patches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classifications">classifications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatches">exclusive_patches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classifications_input`<sup>Optional</sup> <a name="classifications_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classificationsInput"></a>

```python
classifications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludesInput"></a>

```python
excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusive_patches_input`<sup>Optional</sup> <a name="exclusive_patches_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatchesInput"></a>

```python
exclusive_patches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `classifications`<sup>Required</sup> <a name="classifications" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.classifications"></a>

```python
classifications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusive_patches`<sup>Required</sup> <a name="exclusive_patches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.exclusivePatches"></a>

```python
exclusive_patches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate">GoogleOsConfigPatchDeploymentPatchConfigWindowsUpdate</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetExclusivePackages">reset_exclusive_packages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetMinimal">reset_minimal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetSecurity">reset_security</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excludes` <a name="reset_excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_exclusive_packages` <a name="reset_exclusive_packages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetExclusivePackages"></a>

```python
def reset_exclusive_packages() -> None
```

##### `reset_minimal` <a name="reset_minimal" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetMinimal"></a>

```python
def reset_minimal() -> None
```

##### `reset_security` <a name="reset_security" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.resetSecurity"></a>

```python
def reset_security() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludesInput">excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackagesInput">exclusive_packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimalInput">minimal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.securityInput">security_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackages">exclusive_packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimal">minimal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.security">security</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludesInput"></a>

```python
excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusive_packages_input`<sup>Optional</sup> <a name="exclusive_packages_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackagesInput"></a>

```python
exclusive_packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `minimal_input`<sup>Optional</sup> <a name="minimal_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimalInput"></a>

```python
minimal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_input`<sup>Optional</sup> <a name="security_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.securityInput"></a>

```python
security_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusive_packages`<sup>Required</sup> <a name="exclusive_packages" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.exclusivePackages"></a>

```python
exclusive_packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `minimal`<sup>Required</sup> <a name="minimal" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.minimal"></a>

```python
minimal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.security"></a>

```python
security: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYumOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigYum
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigYum">GoogleOsConfigPatchDeploymentPatchConfigYum</a>

---


### GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference <a name="GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetCategories">reset_categories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExclusivePatches">reset_exclusive_patches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetSeverities">reset_severities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithOptional">reset_with_optional</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithUpdate">reset_with_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_categories` <a name="reset_categories" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetCategories"></a>

```python
def reset_categories() -> None
```

##### `reset_excludes` <a name="reset_excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_exclusive_patches` <a name="reset_exclusive_patches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetExclusivePatches"></a>

```python
def reset_exclusive_patches() -> None
```

##### `reset_severities` <a name="reset_severities" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetSeverities"></a>

```python
def reset_severities() -> None
```

##### `reset_with_optional` <a name="reset_with_optional" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithOptional"></a>

```python
def reset_with_optional() -> None
```

##### `reset_with_update` <a name="reset_with_update" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.resetWithUpdate"></a>

```python
def reset_with_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categoriesInput">categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludesInput">excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatchesInput">exclusive_patches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severitiesInput">severities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptionalInput">with_optional_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdateInput">with_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categories">categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatches">exclusive_patches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severities">severities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptional">with_optional</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdate">with_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `categories_input`<sup>Optional</sup> <a name="categories_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categoriesInput"></a>

```python
categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludesInput"></a>

```python
excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusive_patches_input`<sup>Optional</sup> <a name="exclusive_patches_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatchesInput"></a>

```python
exclusive_patches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities_input`<sup>Optional</sup> <a name="severities_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severitiesInput"></a>

```python
severities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `with_optional_input`<sup>Optional</sup> <a name="with_optional_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptionalInput"></a>

```python
with_optional_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_update_input`<sup>Optional</sup> <a name="with_update_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdateInput"></a>

```python
with_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclusive_patches`<sup>Required</sup> <a name="exclusive_patches" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.exclusivePatches"></a>

```python
exclusive_patches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `with_optional`<sup>Required</sup> <a name="with_optional" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withOptional"></a>

```python
with_optional: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `with_update`<sup>Required</sup> <a name="with_update" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.withUpdate"></a>

```python
with_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypperOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentPatchConfigZypper
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentPatchConfigZypper">GoogleOsConfigPatchDeploymentPatchConfigZypper</a>

---


### GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference <a name="GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth">put_week_day_of_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetMonthDay">reset_month_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetWeekDayOfMonth">reset_week_day_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_week_day_of_month` <a name="put_week_day_of_month" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth"></a>

```python
def put_week_day_of_month(
  day_of_week: str,
  week_ordinal: typing.Union[int, float],
  day_offset: typing.Union[int, float] = None
) -> None
```

###### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth.parameter.dayOfWeek"></a>

- *Type:* str

A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#day_of_week GoogleOsConfigPatchDeployment#day_of_week}

---

###### `week_ordinal`<sup>Required</sup> <a name="week_ordinal" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth.parameter.weekOrdinal"></a>

- *Type:* typing.Union[int, float]

Week number in a month.

1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#week_ordinal GoogleOsConfigPatchDeployment#week_ordinal}

---

###### `day_offset`<sup>Optional</sup> <a name="day_offset" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.putWeekDayOfMonth.parameter.dayOffset"></a>

- *Type:* typing.Union[int, float]

Represents the number of days before or after the given week day of month that the patch deployment is scheduled for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#day_offset GoogleOsConfigPatchDeployment#day_offset}

---

##### `reset_month_day` <a name="reset_month_day" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetMonthDay"></a>

```python
def reset_month_day() -> None
```

##### `reset_week_day_of_month` <a name="reset_week_day_of_month" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.resetWeekDayOfMonth"></a>

```python
def reset_week_day_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonth">week_day_of_month</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDayInput">month_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonthInput">week_day_of_month_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDay">month_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `week_day_of_month`<sup>Required</sup> <a name="week_day_of_month" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonth"></a>

```python
week_day_of_month: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference</a>

---

##### `month_day_input`<sup>Optional</sup> <a name="month_day_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDayInput"></a>

```python
month_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `week_day_of_month_input`<sup>Optional</sup> <a name="week_day_of_month_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.weekDayOfMonthInput"></a>

```python
week_day_of_month_input: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---

##### `month_day`<sup>Required</sup> <a name="month_day" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.monthDay"></a>

```python
month_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentRecurringScheduleMonthly
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a>

---


### GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference <a name="GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resetDayOffset">reset_day_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day_offset` <a name="reset_day_offset" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.resetDayOffset"></a>

```python
def reset_day_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffsetInput">day_offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinalInput">week_ordinal_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffset">day_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinal">week_ordinal</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_offset_input`<sup>Optional</sup> <a name="day_offset_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffsetInput"></a>

```python
day_offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `week_ordinal_input`<sup>Optional</sup> <a name="week_ordinal_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinalInput"></a>

```python
week_ordinal_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_offset`<sup>Required</sup> <a name="day_offset" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOffset"></a>

```python
day_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `week_ordinal`<sup>Required</sup> <a name="week_ordinal" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.weekOrdinal"></a>

```python
week_ordinal: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

---


### GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference <a name="GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly">put_monthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay">put_time_of_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone">put_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly">put_weekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetMonthly">reset_monthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetWeekly">reset_weekly</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_monthly` <a name="put_monthly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly"></a>

```python
def put_monthly(
  month_day: typing.Union[int, float] = None,
  week_day_of_month: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth = None
) -> None
```

###### `month_day`<sup>Optional</sup> <a name="month_day" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly.parameter.monthDay"></a>

- *Type:* typing.Union[int, float]

One day of the month.

1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#month_day GoogleOsConfigPatchDeployment#month_day}

---

###### `week_day_of_month`<sup>Optional</sup> <a name="week_day_of_month" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putMonthly.parameter.weekDayOfMonth"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth</a>

week_day_of_month block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#week_day_of_month GoogleOsConfigPatchDeployment#week_day_of_month}

---

##### `put_time_of_day` <a name="put_time_of_day" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay"></a>

```python
def put_time_of_day(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#hours GoogleOsConfigPatchDeployment#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#minutes GoogleOsConfigPatchDeployment#minutes}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#nanos GoogleOsConfigPatchDeployment#nanos}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeOfDay.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of minutes of the time.

Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#seconds GoogleOsConfigPatchDeployment#seconds}

---

##### `put_time_zone` <a name="put_time_zone" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone"></a>

```python
def put_time_zone(
  id: str,
  version: str = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone.parameter.id"></a>

- *Type:* str

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#id GoogleOsConfigPatchDeployment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putTimeZone.parameter.version"></a>

- *Type:* str

IANA Time Zone Database version number, e.g. "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#version GoogleOsConfigPatchDeployment#version}

---

##### `put_weekly` <a name="put_weekly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly"></a>

```python
def put_weekly(
  day_of_week: str
) -> None
```

###### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.putWeekly.parameter.dayOfWeek"></a>

- *Type:* str

IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#day_of_week GoogleOsConfigPatchDeployment#day_of_week}

---

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_monthly` <a name="reset_monthly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetMonthly"></a>

```python
def reset_monthly() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_weekly` <a name="reset_weekly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.resetWeekly"></a>

```python
def reset_weekly() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.lastExecuteTime">last_execute_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.nextExecuteTime">next_execute_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDay">time_of_day</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZone">time_zone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.weekly">weekly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthlyInput">monthly_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDayInput">time_of_day_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.weeklyInput">weekly_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_execute_time`<sup>Required</sup> <a name="last_execute_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.lastExecuteTime"></a>

```python
last_execute_time: str
```

- *Type:* str

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthly"></a>

```python
monthly: GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference</a>

---

##### `next_execute_time`<sup>Required</sup> <a name="next_execute_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.nextExecuteTime"></a>

```python
next_execute_time: str
```

- *Type:* str

---

##### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDay"></a>

```python
time_of_day: GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference</a>

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZone"></a>

```python
time_zone: GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference</a>

---

##### `weekly`<sup>Required</sup> <a name="weekly" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.weekly"></a>

```python
weekly: GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference">GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference</a>

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `monthly_input`<sup>Optional</sup> <a name="monthly_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.monthlyInput"></a>

```python
monthly_input: GoogleOsConfigPatchDeploymentRecurringScheduleMonthly
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleMonthly">GoogleOsConfigPatchDeploymentRecurringScheduleMonthly</a>

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `time_of_day_input`<sup>Optional</sup> <a name="time_of_day_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeOfDayInput"></a>

```python
time_of_day_input: GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---

##### `weekly_input`<sup>Optional</sup> <a name="weekly_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.weeklyInput"></a>

```python
weekly_input: GoogleOsConfigPatchDeploymentRecurringScheduleWeekly
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a>

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentRecurringSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringSchedule">GoogleOsConfigPatchDeploymentRecurringSchedule</a>

---


### GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference <a name="GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay">GoogleOsConfigPatchDeploymentRecurringScheduleTimeOfDay</a>

---


### GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference <a name="GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone">GoogleOsConfigPatchDeploymentRecurringScheduleTimeZone</a>

---


### GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference <a name="GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentRecurringScheduleWeekly
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRecurringScheduleWeekly">GoogleOsConfigPatchDeploymentRecurringScheduleWeekly</a>

---


### GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference <a name="GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetFixed">reset_fixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetPercentage">reset_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fixed` <a name="reset_fixed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetFixed"></a>

```python
def reset_fixed() -> None
```

##### `reset_percentage` <a name="reset_percentage" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.resetPercentage"></a>

```python
def reset_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixedInput">fixed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixed">fixed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_input`<sup>Optional</sup> <a name="fixed_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixedInput"></a>

```python
fixed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.fixed"></a>

```python
fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentRolloutDisruptionBudget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a>

---


### GoogleOsConfigPatchDeploymentRolloutOutputReference <a name="GoogleOsConfigPatchDeploymentRolloutOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget">put_disruption_budget</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_disruption_budget` <a name="put_disruption_budget" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget"></a>

```python
def put_disruption_budget(
  fixed: typing.Union[int, float] = None,
  percentage: typing.Union[int, float] = None
) -> None
```

###### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget.parameter.fixed"></a>

- *Type:* typing.Union[int, float]

Specifies a fixed value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#fixed GoogleOsConfigPatchDeployment#fixed}

---

###### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.putDisruptionBudget.parameter.percentage"></a>

- *Type:* typing.Union[int, float]

Specifies the relative value defined as a percentage, which will be multiplied by a reference value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_os_config_patch_deployment#percentage GoogleOsConfigPatchDeployment#percentage}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudget">disruption_budget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference">GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudgetInput">disruption_budget_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disruption_budget`<sup>Required</sup> <a name="disruption_budget" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudget"></a>

```python
disruption_budget: GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference">GoogleOsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference</a>

---

##### `disruption_budget_input`<sup>Optional</sup> <a name="disruption_budget_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.disruptionBudgetInput"></a>

```python
disruption_budget_input: GoogleOsConfigPatchDeploymentRolloutDisruptionBudget
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutDisruptionBudget">GoogleOsConfigPatchDeploymentRolloutDisruptionBudget</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRolloutOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOsConfigPatchDeploymentRollout
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentRollout">GoogleOsConfigPatchDeploymentRollout</a>

---


### GoogleOsConfigPatchDeploymentTimeoutsOutputReference <a name="GoogleOsConfigPatchDeploymentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_os_config_patch_deployment

googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts">GoogleOsConfigPatchDeploymentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleOsConfigPatchDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOsConfigPatchDeployment.GoogleOsConfigPatchDeploymentTimeouts">GoogleOsConfigPatchDeploymentTimeouts</a>]

---



