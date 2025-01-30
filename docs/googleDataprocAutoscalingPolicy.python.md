# `googleDataprocAutoscalingPolicy` Submodule <a name="`googleDataprocAutoscalingPolicy` Submodule" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocAutoscalingPolicy <a name="GoogleDataprocAutoscalingPolicy" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy google_dataproc_autoscaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_id: str,
  basic_algorithm: GoogleDataprocAutoscalingPolicyBasicAlgorithm = None,
  id: str = None,
  location: str = None,
  project: str = None,
  secondary_worker_config: GoogleDataprocAutoscalingPolicySecondaryWorkerConfig = None,
  timeouts: GoogleDataprocAutoscalingPolicyTimeouts = None,
  worker_config: GoogleDataprocAutoscalingPolicyWorkerConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | The policy id. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.basicAlgorithm">basic_algorithm</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a></code> | basic_algorithm block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#id GoogleDataprocAutoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The  location where the autoscaling policy should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#project GoogleDataprocAutoscalingPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.secondaryWorkerConfig">secondary_worker_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | secondary_worker_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.workerConfig">worker_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a></code> | worker_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.policyId"></a>

- *Type:* str

The policy id.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#policy_id GoogleDataprocAutoscalingPolicy#policy_id}

---

##### `basic_algorithm`<sup>Optional</sup> <a name="basic_algorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.basicAlgorithm"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a>

basic_algorithm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#basic_algorithm GoogleDataprocAutoscalingPolicy#basic_algorithm}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#id GoogleDataprocAutoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.location"></a>

- *Type:* str

The  location where the autoscaling policy should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#location GoogleDataprocAutoscalingPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#project GoogleDataprocAutoscalingPolicy#project}.

---

##### `secondary_worker_config`<sup>Optional</sup> <a name="secondary_worker_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.secondaryWorkerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a>

secondary_worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#secondary_worker_config GoogleDataprocAutoscalingPolicy#secondary_worker_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#timeouts GoogleDataprocAutoscalingPolicy#timeouts}

---

##### `worker_config`<sup>Optional</sup> <a name="worker_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.workerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#worker_config GoogleDataprocAutoscalingPolicy#worker_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putBasicAlgorithm">put_basic_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putSecondaryWorkerConfig">put_secondary_worker_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putWorkerConfig">put_worker_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetBasicAlgorithm">reset_basic_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetSecondaryWorkerConfig">reset_secondary_worker_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetWorkerConfig">reset_worker_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_basic_algorithm` <a name="put_basic_algorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putBasicAlgorithm"></a>

```python
def put_basic_algorithm(
  yarn_config: GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig,
  cooldown_period: str = None
) -> None
```

###### `yarn_config`<sup>Required</sup> <a name="yarn_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putBasicAlgorithm.parameter.yarnConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

yarn_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#yarn_config GoogleDataprocAutoscalingPolicy#yarn_config}

---

###### `cooldown_period`<sup>Optional</sup> <a name="cooldown_period" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putBasicAlgorithm.parameter.cooldownPeriod"></a>

- *Type:* str

Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.

Bounds: [2m, 1d]. Default: 2m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#cooldown_period GoogleDataprocAutoscalingPolicy#cooldown_period}

---

##### `put_secondary_worker_config` <a name="put_secondary_worker_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putSecondaryWorkerConfig"></a>

```python
def put_secondary_worker_config(
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
) -> None
```

###### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putSecondaryWorkerConfig.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Maximum number of instances for this group.

Note that by default, clusters will not use
secondary workers. Required for secondary workers if the minimum secondary instances is set.
Bounds: [minInstances, ). Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#max_instances GoogleDataprocAutoscalingPolicy#max_instances}

---

###### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putSecondaryWorkerConfig.parameter.minInstances"></a>

- *Type:* typing.Union[int, float]

Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#min_instances GoogleDataprocAutoscalingPolicy#min_instances}

---

###### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putSecondaryWorkerConfig.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#weight GoogleDataprocAutoscalingPolicy#weight}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#create GoogleDataprocAutoscalingPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#delete GoogleDataprocAutoscalingPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#update GoogleDataprocAutoscalingPolicy#update}.

---

##### `put_worker_config` <a name="put_worker_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putWorkerConfig"></a>

```python
def put_worker_config(
  max_instances: typing.Union[int, float],
  min_instances: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
) -> None
```

###### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putWorkerConfig.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Maximum number of instances for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#max_instances GoogleDataprocAutoscalingPolicy#max_instances}

---

###### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putWorkerConfig.parameter.minInstances"></a>

- *Type:* typing.Union[int, float]

Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#min_instances GoogleDataprocAutoscalingPolicy#min_instances}

---

###### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putWorkerConfig.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#weight GoogleDataprocAutoscalingPolicy#weight}

---

##### `reset_basic_algorithm` <a name="reset_basic_algorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetBasicAlgorithm"></a>

```python
def reset_basic_algorithm() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_secondary_worker_config` <a name="reset_secondary_worker_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetSecondaryWorkerConfig"></a>

```python
def reset_secondary_worker_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_worker_config` <a name="reset_worker_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetWorkerConfig"></a>

```python
def reset_worker_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataprocAutoscalingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataprocAutoscalingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataprocAutoscalingPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataprocAutoscalingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocAutoscalingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.basicAlgorithm">basic_algorithm</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference">GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.secondaryWorkerConfig">secondary_worker_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference">GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference">GoogleDataprocAutoscalingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.workerConfig">worker_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference">GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.basicAlgorithmInput">basic_algorithm_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.secondaryWorkerConfigInput">secondary_worker_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.workerConfigInput">worker_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `basic_algorithm`<sup>Required</sup> <a name="basic_algorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.basicAlgorithm"></a>

```python
basic_algorithm: GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference">GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secondary_worker_config`<sup>Required</sup> <a name="secondary_worker_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.secondaryWorkerConfig"></a>

```python
secondary_worker_config: GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference">GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.timeouts"></a>

```python
timeouts: GoogleDataprocAutoscalingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference">GoogleDataprocAutoscalingPolicyTimeoutsOutputReference</a>

---

##### `worker_config`<sup>Required</sup> <a name="worker_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.workerConfig"></a>

```python
worker_config: GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference">GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference</a>

---

##### `basic_algorithm_input`<sup>Optional</sup> <a name="basic_algorithm_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.basicAlgorithmInput"></a>

```python
basic_algorithm_input: GoogleDataprocAutoscalingPolicyBasicAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `secondary_worker_config_input`<sup>Optional</sup> <a name="secondary_worker_config_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.secondaryWorkerConfigInput"></a>

```python
secondary_worker_config_input: GoogleDataprocAutoscalingPolicySecondaryWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataprocAutoscalingPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a>]

---

##### `worker_config_input`<sup>Optional</sup> <a name="worker_config_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.workerConfigInput"></a>

```python
worker_config_input: GoogleDataprocAutoscalingPolicyWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocAutoscalingPolicyBasicAlgorithm <a name="GoogleDataprocAutoscalingPolicyBasicAlgorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm(
  yarn_config: GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig,
  cooldown_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.property.yarnConfig">yarn_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | yarn_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.property.cooldownPeriod">cooldown_period</a></code> | <code>str</code> | Duration between scaling events. A scaling period starts after the update operation from the previous event has completed. |

---

##### `yarn_config`<sup>Required</sup> <a name="yarn_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.property.yarnConfig"></a>

```python
yarn_config: GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

yarn_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#yarn_config GoogleDataprocAutoscalingPolicy#yarn_config}

---

##### `cooldown_period`<sup>Optional</sup> <a name="cooldown_period" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.property.cooldownPeriod"></a>

```python
cooldown_period: str
```

- *Type:* str

Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.

Bounds: [2m, 1d]. Default: 2m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#cooldown_period GoogleDataprocAutoscalingPolicy#cooldown_period}

---

### GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig <a name="GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig(
  graceful_decommission_timeout: str,
  scale_down_factor: typing.Union[int, float],
  scale_up_factor: typing.Union[int, float],
  scale_down_min_worker_fraction: typing.Union[int, float] = None,
  scale_up_min_worker_fraction: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.gracefulDecommissionTimeout">graceful_decommission_timeout</a></code> | <code>str</code> | Timeout for YARN graceful decommissioning of Node Managers. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownFactor">scale_down_factor</a></code> | <code>typing.Union[int, float]</code> | Fraction of average pending memory in the last cooldown period for which to remove workers. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpFactor">scale_up_factor</a></code> | <code>typing.Union[int, float]</code> | Fraction of average pending memory in the last cooldown period for which to add workers. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownMinWorkerFraction">scale_down_min_worker_fraction</a></code> | <code>typing.Union[int, float]</code> | Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpMinWorkerFraction">scale_up_min_worker_fraction</a></code> | <code>typing.Union[int, float]</code> | Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. |

---

##### `graceful_decommission_timeout`<sup>Required</sup> <a name="graceful_decommission_timeout" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.gracefulDecommissionTimeout"></a>

```python
graceful_decommission_timeout: str
```

- *Type:* str

Timeout for YARN graceful decommissioning of Node Managers.

Specifies the
duration to wait for jobs to complete before forcefully removing workers
(and potentially interrupting jobs). Only applicable to downscaling operations.

Bounds: [0s, 1d].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#graceful_decommission_timeout GoogleDataprocAutoscalingPolicy#graceful_decommission_timeout}

---

##### `scale_down_factor`<sup>Required</sup> <a name="scale_down_factor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownFactor"></a>

```python
scale_down_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fraction of average pending memory in the last cooldown period for which to remove workers.

A scale-down factor of 1 will result in scaling down so that there
is no available memory remaining after the update (more aggressive scaling).
A scale-down factor of 0 disables removing workers, which can be beneficial for
autoscaling a single job.

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#scale_down_factor GoogleDataprocAutoscalingPolicy#scale_down_factor}

---

##### `scale_up_factor`<sup>Required</sup> <a name="scale_up_factor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpFactor"></a>

```python
scale_up_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fraction of average pending memory in the last cooldown period for which to add workers.

A scale-up factor of 1.0 will result in scaling up so that there
is no pending memory remaining after the update (more aggressive scaling).
A scale-up factor closer to 0 will result in a smaller magnitude of scaling up
(less aggressive scaling).

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#scale_up_factor GoogleDataprocAutoscalingPolicy#scale_up_factor}

---

##### `scale_down_min_worker_fraction`<sup>Optional</sup> <a name="scale_down_min_worker_fraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownMinWorkerFraction"></a>

```python
scale_down_min_worker_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0
means the autoscaler will scale down on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#scale_down_min_worker_fraction GoogleDataprocAutoscalingPolicy#scale_down_min_worker_fraction}

---

##### `scale_up_min_worker_fraction`<sup>Optional</sup> <a name="scale_up_min_worker_fraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpMinWorkerFraction"></a>

```python
scale_up_min_worker_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum scale-up threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler
must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of
0 means the autoscaler will scale up on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#scale_up_min_worker_fraction GoogleDataprocAutoscalingPolicy#scale_up_min_worker_fraction}

---

### GoogleDataprocAutoscalingPolicyConfig <a name="GoogleDataprocAutoscalingPolicyConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_id: str,
  basic_algorithm: GoogleDataprocAutoscalingPolicyBasicAlgorithm = None,
  id: str = None,
  location: str = None,
  project: str = None,
  secondary_worker_config: GoogleDataprocAutoscalingPolicySecondaryWorkerConfig = None,
  timeouts: GoogleDataprocAutoscalingPolicyTimeouts = None,
  worker_config: GoogleDataprocAutoscalingPolicyWorkerConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.policyId">policy_id</a></code> | <code>str</code> | The policy id. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.basicAlgorithm">basic_algorithm</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a></code> | basic_algorithm block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#id GoogleDataprocAutoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.location">location</a></code> | <code>str</code> | The  location where the autoscaling policy should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#project GoogleDataprocAutoscalingPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.secondaryWorkerConfig">secondary_worker_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | secondary_worker_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.workerConfig">worker_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a></code> | worker_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

The policy id.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#policy_id GoogleDataprocAutoscalingPolicy#policy_id}

---

##### `basic_algorithm`<sup>Optional</sup> <a name="basic_algorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.basicAlgorithm"></a>

```python
basic_algorithm: GoogleDataprocAutoscalingPolicyBasicAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a>

basic_algorithm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#basic_algorithm GoogleDataprocAutoscalingPolicy#basic_algorithm}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#id GoogleDataprocAutoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The  location where the autoscaling policy should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#location GoogleDataprocAutoscalingPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#project GoogleDataprocAutoscalingPolicy#project}.

---

##### `secondary_worker_config`<sup>Optional</sup> <a name="secondary_worker_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.secondaryWorkerConfig"></a>

```python
secondary_worker_config: GoogleDataprocAutoscalingPolicySecondaryWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a>

secondary_worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#secondary_worker_config GoogleDataprocAutoscalingPolicy#secondary_worker_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleDataprocAutoscalingPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#timeouts GoogleDataprocAutoscalingPolicy#timeouts}

---

##### `worker_config`<sup>Optional</sup> <a name="worker_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.workerConfig"></a>

```python
worker_config: GoogleDataprocAutoscalingPolicyWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#worker_config GoogleDataprocAutoscalingPolicy#worker_config}

---

### GoogleDataprocAutoscalingPolicySecondaryWorkerConfig <a name="GoogleDataprocAutoscalingPolicySecondaryWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig(
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum number of instances for this group. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. |

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of instances for this group.

Note that by default, clusters will not use
secondary workers. Required for secondary workers if the minimum secondary instances is set.
Bounds: [minInstances, ). Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#max_instances GoogleDataprocAutoscalingPolicy#max_instances}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#min_instances GoogleDataprocAutoscalingPolicy#min_instances}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#weight GoogleDataprocAutoscalingPolicy#weight}

---

### GoogleDataprocAutoscalingPolicyTimeouts <a name="GoogleDataprocAutoscalingPolicyTimeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#create GoogleDataprocAutoscalingPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#delete GoogleDataprocAutoscalingPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#update GoogleDataprocAutoscalingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#create GoogleDataprocAutoscalingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#delete GoogleDataprocAutoscalingPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#update GoogleDataprocAutoscalingPolicy#update}.

---

### GoogleDataprocAutoscalingPolicyWorkerConfig <a name="GoogleDataprocAutoscalingPolicyWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig(
  max_instances: typing.Union[int, float],
  min_instances: typing.Union[int, float] = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum number of instances for this group. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. |

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of instances for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#max_instances GoogleDataprocAutoscalingPolicy#max_instances}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#min_instances GoogleDataprocAutoscalingPolicy#min_instances}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#weight GoogleDataprocAutoscalingPolicy#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference <a name="GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig">put_yarn_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resetCooldownPeriod">reset_cooldown_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_yarn_config` <a name="put_yarn_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig"></a>

```python
def put_yarn_config(
  graceful_decommission_timeout: str,
  scale_down_factor: typing.Union[int, float],
  scale_up_factor: typing.Union[int, float],
  scale_down_min_worker_fraction: typing.Union[int, float] = None,
  scale_up_min_worker_fraction: typing.Union[int, float] = None
) -> None
```

###### `graceful_decommission_timeout`<sup>Required</sup> <a name="graceful_decommission_timeout" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.gracefulDecommissionTimeout"></a>

- *Type:* str

Timeout for YARN graceful decommissioning of Node Managers.

Specifies the
duration to wait for jobs to complete before forcefully removing workers
(and potentially interrupting jobs). Only applicable to downscaling operations.

Bounds: [0s, 1d].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#graceful_decommission_timeout GoogleDataprocAutoscalingPolicy#graceful_decommission_timeout}

---

###### `scale_down_factor`<sup>Required</sup> <a name="scale_down_factor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.scaleDownFactor"></a>

- *Type:* typing.Union[int, float]

Fraction of average pending memory in the last cooldown period for which to remove workers.

A scale-down factor of 1 will result in scaling down so that there
is no available memory remaining after the update (more aggressive scaling).
A scale-down factor of 0 disables removing workers, which can be beneficial for
autoscaling a single job.

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#scale_down_factor GoogleDataprocAutoscalingPolicy#scale_down_factor}

---

###### `scale_up_factor`<sup>Required</sup> <a name="scale_up_factor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.scaleUpFactor"></a>

- *Type:* typing.Union[int, float]

Fraction of average pending memory in the last cooldown period for which to add workers.

A scale-up factor of 1.0 will result in scaling up so that there
is no pending memory remaining after the update (more aggressive scaling).
A scale-up factor closer to 0 will result in a smaller magnitude of scaling up
(less aggressive scaling).

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#scale_up_factor GoogleDataprocAutoscalingPolicy#scale_up_factor}

---

###### `scale_down_min_worker_fraction`<sup>Optional</sup> <a name="scale_down_min_worker_fraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.scaleDownMinWorkerFraction"></a>

- *Type:* typing.Union[int, float]

Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0
means the autoscaler will scale down on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#scale_down_min_worker_fraction GoogleDataprocAutoscalingPolicy#scale_down_min_worker_fraction}

---

###### `scale_up_min_worker_fraction`<sup>Optional</sup> <a name="scale_up_min_worker_fraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.scaleUpMinWorkerFraction"></a>

- *Type:* typing.Union[int, float]

Minimum scale-up threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler
must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of
0 means the autoscaler will scale up on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_autoscaling_policy#scale_up_min_worker_fraction GoogleDataprocAutoscalingPolicy#scale_up_min_worker_fraction}

---

##### `reset_cooldown_period` <a name="reset_cooldown_period" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resetCooldownPeriod"></a>

```python
def reset_cooldown_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfig">yarn_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriodInput">cooldown_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfigInput">yarn_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriod">cooldown_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `yarn_config`<sup>Required</sup> <a name="yarn_config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfig"></a>

```python
yarn_config: GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference</a>

---

##### `cooldown_period_input`<sup>Optional</sup> <a name="cooldown_period_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriodInput"></a>

```python
cooldown_period_input: str
```

- *Type:* str

---

##### `yarn_config_input`<sup>Optional</sup> <a name="yarn_config_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfigInput"></a>

```python
yarn_config_input: GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---

##### `cooldown_period`<sup>Required</sup> <a name="cooldown_period" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriod"></a>

```python
cooldown_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocAutoscalingPolicyBasicAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a>

---


### GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference <a name="GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleDownMinWorkerFraction">reset_scale_down_min_worker_fraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleUpMinWorkerFraction">reset_scale_up_min_worker_fraction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scale_down_min_worker_fraction` <a name="reset_scale_down_min_worker_fraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleDownMinWorkerFraction"></a>

```python
def reset_scale_down_min_worker_fraction() -> None
```

##### `reset_scale_up_min_worker_fraction` <a name="reset_scale_up_min_worker_fraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleUpMinWorkerFraction"></a>

```python
def reset_scale_up_min_worker_fraction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeoutInput">graceful_decommission_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactorInput">scale_down_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFractionInput">scale_down_min_worker_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactorInput">scale_up_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFractionInput">scale_up_min_worker_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeout">graceful_decommission_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactor">scale_down_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFraction">scale_down_min_worker_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactor">scale_up_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFraction">scale_up_min_worker_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `graceful_decommission_timeout_input`<sup>Optional</sup> <a name="graceful_decommission_timeout_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeoutInput"></a>

```python
graceful_decommission_timeout_input: str
```

- *Type:* str

---

##### `scale_down_factor_input`<sup>Optional</sup> <a name="scale_down_factor_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactorInput"></a>

```python
scale_down_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_down_min_worker_fraction_input`<sup>Optional</sup> <a name="scale_down_min_worker_fraction_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFractionInput"></a>

```python
scale_down_min_worker_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_up_factor_input`<sup>Optional</sup> <a name="scale_up_factor_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactorInput"></a>

```python
scale_up_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_up_min_worker_fraction_input`<sup>Optional</sup> <a name="scale_up_min_worker_fraction_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFractionInput"></a>

```python
scale_up_min_worker_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `graceful_decommission_timeout`<sup>Required</sup> <a name="graceful_decommission_timeout" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeout"></a>

```python
graceful_decommission_timeout: str
```

- *Type:* str

---

##### `scale_down_factor`<sup>Required</sup> <a name="scale_down_factor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactor"></a>

```python
scale_down_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_down_min_worker_fraction`<sup>Required</sup> <a name="scale_down_min_worker_fraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFraction"></a>

```python
scale_down_min_worker_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_up_factor`<sup>Required</sup> <a name="scale_up_factor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactor"></a>

```python
scale_up_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_up_min_worker_fraction`<sup>Required</sup> <a name="scale_up_min_worker_fraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFraction"></a>

```python
scale_up_min_worker_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---


### GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference <a name="GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMaxInstances">reset_max_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMinInstances">reset_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_instances` <a name="reset_max_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMaxInstances"></a>

```python
def reset_max_instances() -> None
```

##### `reset_min_instances` <a name="reset_min_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMinInstances"></a>

```python
def reset_min_instances() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstancesInput">min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances_input`<sup>Optional</sup> <a name="min_instances_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstancesInput"></a>

```python
min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocAutoscalingPolicySecondaryWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a>

---


### GoogleDataprocAutoscalingPolicyTimeoutsOutputReference <a name="GoogleDataprocAutoscalingPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataprocAutoscalingPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a>]

---


### GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference <a name="GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_autoscaling_policy

googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resetMinInstances">reset_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_min_instances` <a name="reset_min_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resetMinInstances"></a>

```python
def reset_min_instances() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstancesInput">min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances_input`<sup>Optional</sup> <a name="min_instances_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstancesInput"></a>

```python
min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocAutoscalingPolicyWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a>

---



