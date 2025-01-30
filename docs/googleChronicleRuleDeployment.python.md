# `googleChronicleRuleDeployment` Submodule <a name="`googleChronicleRuleDeployment` Submodule" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleRuleDeployment <a name="GoogleChronicleRuleDeployment" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment google_chronicle_rule_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_rule_deployment

googleChronicleRuleDeployment.GoogleChronicleRuleDeployment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  location: str,
  rule: str,
  alerting: typing.Union[bool, IResolvable] = None,
  archived: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  run_frequency: str = None,
  timeouts: GoogleChronicleRuleDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.rule">rule</a></code> | <code>str</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.alerting">alerting</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether detections resulting from this deployment should be considered alerts. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The archive state of the rule deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule is currently deployed continuously against incoming data. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#id GoogleChronicleRuleDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#project GoogleChronicleRuleDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.runFrequency">run_frequency</a></code> | <code>str</code> | The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.instance"></a>

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#instance GoogleChronicleRuleDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#location GoogleChronicleRuleDeployment#location}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.rule"></a>

- *Type:* str

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#rule GoogleChronicleRuleDeployment#rule}

---

##### `alerting`<sup>Optional</sup> <a name="alerting" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.alerting"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether detections resulting from this deployment should be considered alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#alerting GoogleChronicleRuleDeployment#alerting}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.archived"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The archive state of the rule deployment.

Cannot be set to true unless enabled is set to false.
If set to true, alerting will automatically be set to false.
If currently set to true, enabled, alerting, and run_frequency cannot be
updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#archived GoogleChronicleRuleDeployment#archived}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule is currently deployed continuously against incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#enabled GoogleChronicleRuleDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#id GoogleChronicleRuleDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#project GoogleChronicleRuleDeployment#project}.

---

##### `run_frequency`<sup>Optional</sup> <a name="run_frequency" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.runFrequency"></a>

- *Type:* str

The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#run_frequency GoogleChronicleRuleDeployment#run_frequency}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#timeouts GoogleChronicleRuleDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetAlerting">reset_alerting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetArchived">reset_archived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetRunFrequency">reset_run_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#create GoogleChronicleRuleDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#delete GoogleChronicleRuleDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#update GoogleChronicleRuleDeployment#update}.

---

##### `reset_alerting` <a name="reset_alerting" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetAlerting"></a>

```python
def reset_alerting() -> None
```

##### `reset_archived` <a name="reset_archived" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetArchived"></a>

```python
def reset_archived() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_run_frequency` <a name="reset_run_frequency" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetRunFrequency"></a>

```python
def reset_run_frequency() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleChronicleRuleDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_rule_deployment

googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_rule_deployment

googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_rule_deployment

googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_rule_deployment

googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleChronicleRuleDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleChronicleRuleDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleChronicleRuleDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleRuleDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.archiveTime">archive_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.consumerRules">consumer_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.executionState">execution_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.lastAlertStatusChangeTime">last_alert_status_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.producerRules">producer_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference">GoogleChronicleRuleDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.alertingInput">alerting_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.archivedInput">archived_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.runFrequencyInput">run_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.alerting">alerting</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.rule">rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.runFrequency">run_frequency</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `archive_time`<sup>Required</sup> <a name="archive_time" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.archiveTime"></a>

```python
archive_time: str
```

- *Type:* str

---

##### `consumer_rules`<sup>Required</sup> <a name="consumer_rules" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.consumerRules"></a>

```python
consumer_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `execution_state`<sup>Required</sup> <a name="execution_state" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.executionState"></a>

```python
execution_state: str
```

- *Type:* str

---

##### `last_alert_status_change_time`<sup>Required</sup> <a name="last_alert_status_change_time" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.lastAlertStatusChangeTime"></a>

```python
last_alert_status_change_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `producer_rules`<sup>Required</sup> <a name="producer_rules" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.producerRules"></a>

```python
producer_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.timeouts"></a>

```python
timeouts: GoogleChronicleRuleDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference">GoogleChronicleRuleDeploymentTimeoutsOutputReference</a>

---

##### `alerting_input`<sup>Optional</sup> <a name="alerting_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.alertingInput"></a>

```python
alerting_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archived_input`<sup>Optional</sup> <a name="archived_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.archivedInput"></a>

```python
archived_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `run_frequency_input`<sup>Optional</sup> <a name="run_frequency_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.runFrequencyInput"></a>

```python
run_frequency_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleChronicleRuleDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a>]

---

##### `alerting`<sup>Required</sup> <a name="alerting" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.alerting"></a>

```python
alerting: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

##### `run_frequency`<sup>Required</sup> <a name="run_frequency" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.runFrequency"></a>

```python
run_frequency: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleRuleDeploymentConfig <a name="GoogleChronicleRuleDeploymentConfig" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_rule_deployment

googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  location: str,
  rule: str,
  alerting: typing.Union[bool, IResolvable] = None,
  archived: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  run_frequency: str = None,
  timeouts: GoogleChronicleRuleDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.rule">rule</a></code> | <code>str</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.alerting">alerting</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether detections resulting from this deployment should be considered alerts. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The archive state of the rule deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule is currently deployed continuously against incoming data. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#id GoogleChronicleRuleDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#project GoogleChronicleRuleDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.runFrequency">run_frequency</a></code> | <code>str</code> | The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#instance GoogleChronicleRuleDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#location GoogleChronicleRuleDeployment#location}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.rule"></a>

```python
rule: str
```

- *Type:* str

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#rule GoogleChronicleRuleDeployment#rule}

---

##### `alerting`<sup>Optional</sup> <a name="alerting" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.alerting"></a>

```python
alerting: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether detections resulting from this deployment should be considered alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#alerting GoogleChronicleRuleDeployment#alerting}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The archive state of the rule deployment.

Cannot be set to true unless enabled is set to false.
If set to true, alerting will automatically be set to false.
If currently set to true, enabled, alerting, and run_frequency cannot be
updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#archived GoogleChronicleRuleDeployment#archived}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule is currently deployed continuously against incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#enabled GoogleChronicleRuleDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#id GoogleChronicleRuleDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#project GoogleChronicleRuleDeployment#project}.

---

##### `run_frequency`<sup>Optional</sup> <a name="run_frequency" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.runFrequency"></a>

```python
run_frequency: str
```

- *Type:* str

The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#run_frequency GoogleChronicleRuleDeployment#run_frequency}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.timeouts"></a>

```python
timeouts: GoogleChronicleRuleDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#timeouts GoogleChronicleRuleDeployment#timeouts}

---

### GoogleChronicleRuleDeploymentTimeouts <a name="GoogleChronicleRuleDeploymentTimeouts" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_rule_deployment

googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#create GoogleChronicleRuleDeployment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#delete GoogleChronicleRuleDeployment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#update GoogleChronicleRuleDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#create GoogleChronicleRuleDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#delete GoogleChronicleRuleDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_chronicle_rule_deployment#update GoogleChronicleRuleDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleRuleDeploymentTimeoutsOutputReference <a name="GoogleChronicleRuleDeploymentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_rule_deployment

googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleChronicleRuleDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a>]

---



