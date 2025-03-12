# `googleChronicleRetrohunt` Submodule <a name="`googleChronicleRetrohunt` Submodule" id="@cdktf/provider-google-beta.googleChronicleRetrohunt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleRetrohunt <a name="GoogleChronicleRetrohunt" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt google_chronicle_retrohunt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohunt(
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
  process_interval: GoogleChronicleRetrohuntProcessInterval,
  rule: str,
  id: str = None,
  project: str = None,
  retrohunt: str = None,
  timeouts: GoogleChronicleRetrohuntTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.processInterval">process_interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval">GoogleChronicleRetrohuntProcessInterval</a></code> | process_interval block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.rule">rule</a></code> | <code>str</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#id GoogleChronicleRetrohunt#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#project GoogleChronicleRetrohunt#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.retrohunt">retrohunt</a></code> | <code>str</code> | The retrohunt ID of the Retrohunt. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts">GoogleChronicleRetrohuntTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.instance"></a>

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#instance GoogleChronicleRetrohunt#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#location GoogleChronicleRetrohunt#location}

---

##### `process_interval`<sup>Required</sup> <a name="process_interval" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.processInterval"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval">GoogleChronicleRetrohuntProcessInterval</a>

process_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#process_interval GoogleChronicleRetrohunt#process_interval}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.rule"></a>

- *Type:* str

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#rule GoogleChronicleRetrohunt#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#id GoogleChronicleRetrohunt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#project GoogleChronicleRetrohunt#project}.

---

##### `retrohunt`<sup>Optional</sup> <a name="retrohunt" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.retrohunt"></a>

- *Type:* str

The retrohunt ID of the Retrohunt.

A retrohunt is an execution of a Rule over a time range in the past.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#retrohunt GoogleChronicleRetrohunt#retrohunt}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts">GoogleChronicleRetrohuntTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#timeouts GoogleChronicleRetrohunt#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.putProcessInterval">put_process_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.resetRetrohunt">reset_retrohunt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_process_interval` <a name="put_process_interval" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.putProcessInterval"></a>

```python
def put_process_interval(
  end_time: str,
  start_time: str
) -> None
```

###### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.putProcessInterval.parameter.endTime"></a>

- *Type:* str

Exclusive end of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#end_time GoogleChronicleRetrohunt#end_time}

---

###### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.putProcessInterval.parameter.startTime"></a>

- *Type:* str

Inclusive start of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#start_time GoogleChronicleRetrohunt#start_time}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#create GoogleChronicleRetrohunt#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#delete GoogleChronicleRetrohunt#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_retrohunt` <a name="reset_retrohunt" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.resetRetrohunt"></a>

```python
def reset_retrohunt() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleChronicleRetrohunt resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohunt.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohunt.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohunt.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohunt.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleChronicleRetrohunt resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleChronicleRetrohunt to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleChronicleRetrohunt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleRetrohunt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.executionInterval">execution_interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList">GoogleChronicleRetrohuntExecutionIntervalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.processInterval">process_interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference">GoogleChronicleRetrohuntProcessIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.progressPercentage">progress_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference">GoogleChronicleRetrohuntTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.processIntervalInput">process_interval_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval">GoogleChronicleRetrohuntProcessInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.retrohuntInput">retrohunt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.ruleInput">rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts">GoogleChronicleRetrohuntTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.retrohunt">retrohunt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.rule">rule</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_interval`<sup>Required</sup> <a name="execution_interval" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.executionInterval"></a>

```python
execution_interval: GoogleChronicleRetrohuntExecutionIntervalList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList">GoogleChronicleRetrohuntExecutionIntervalList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `process_interval`<sup>Required</sup> <a name="process_interval" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.processInterval"></a>

```python
process_interval: GoogleChronicleRetrohuntProcessIntervalOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference">GoogleChronicleRetrohuntProcessIntervalOutputReference</a>

---

##### `progress_percentage`<sup>Required</sup> <a name="progress_percentage" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.progressPercentage"></a>

```python
progress_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.timeouts"></a>

```python
timeouts: GoogleChronicleRetrohuntTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference">GoogleChronicleRetrohuntTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `process_interval_input`<sup>Optional</sup> <a name="process_interval_input" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.processIntervalInput"></a>

```python
process_interval_input: GoogleChronicleRetrohuntProcessInterval
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval">GoogleChronicleRetrohuntProcessInterval</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `retrohunt_input`<sup>Optional</sup> <a name="retrohunt_input" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.retrohuntInput"></a>

```python
retrohunt_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.ruleInput"></a>

```python
rule_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleChronicleRetrohuntTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts">GoogleChronicleRetrohuntTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `retrohunt`<sup>Required</sup> <a name="retrohunt" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.retrohunt"></a>

```python
retrohunt: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.rule"></a>

```python
rule: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohunt.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleRetrohuntConfig <a name="GoogleChronicleRetrohuntConfig" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  location: str,
  process_interval: GoogleChronicleRetrohuntProcessInterval,
  rule: str,
  id: str = None,
  project: str = None,
  retrohunt: str = None,
  timeouts: GoogleChronicleRetrohuntTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.processInterval">process_interval</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval">GoogleChronicleRetrohuntProcessInterval</a></code> | process_interval block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.rule">rule</a></code> | <code>str</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#id GoogleChronicleRetrohunt#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#project GoogleChronicleRetrohunt#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.retrohunt">retrohunt</a></code> | <code>str</code> | The retrohunt ID of the Retrohunt. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts">GoogleChronicleRetrohuntTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#instance GoogleChronicleRetrohunt#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#location GoogleChronicleRetrohunt#location}

---

##### `process_interval`<sup>Required</sup> <a name="process_interval" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.processInterval"></a>

```python
process_interval: GoogleChronicleRetrohuntProcessInterval
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval">GoogleChronicleRetrohuntProcessInterval</a>

process_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#process_interval GoogleChronicleRetrohunt#process_interval}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.rule"></a>

```python
rule: str
```

- *Type:* str

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#rule GoogleChronicleRetrohunt#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#id GoogleChronicleRetrohunt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#project GoogleChronicleRetrohunt#project}.

---

##### `retrohunt`<sup>Optional</sup> <a name="retrohunt" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.retrohunt"></a>

```python
retrohunt: str
```

- *Type:* str

The retrohunt ID of the Retrohunt.

A retrohunt is an execution of a Rule over a time range in the past.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#retrohunt GoogleChronicleRetrohunt#retrohunt}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntConfig.property.timeouts"></a>

```python
timeouts: GoogleChronicleRetrohuntTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts">GoogleChronicleRetrohuntTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#timeouts GoogleChronicleRetrohunt#timeouts}

---

### GoogleChronicleRetrohuntExecutionInterval <a name="GoogleChronicleRetrohuntExecutionInterval" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionInterval.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionInterval()
```


### GoogleChronicleRetrohuntProcessInterval <a name="GoogleChronicleRetrohuntProcessInterval" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval(
  end_time: str,
  start_time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval.property.endTime">end_time</a></code> | <code>str</code> | Exclusive end of the interval. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval.property.startTime">start_time</a></code> | <code>str</code> | Inclusive start of the interval. |

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Exclusive end of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#end_time GoogleChronicleRetrohunt#end_time}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Inclusive start of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#start_time GoogleChronicleRetrohunt#start_time}

---

### GoogleChronicleRetrohuntTimeouts <a name="GoogleChronicleRetrohuntTimeouts" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#create GoogleChronicleRetrohunt#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#delete GoogleChronicleRetrohunt#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#create GoogleChronicleRetrohunt#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_chronicle_retrohunt#delete GoogleChronicleRetrohunt#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleRetrohuntExecutionIntervalList <a name="GoogleChronicleRetrohuntExecutionIntervalList" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleRetrohuntExecutionIntervalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleChronicleRetrohuntExecutionIntervalOutputReference <a name="GoogleChronicleRetrohuntExecutionIntervalOutputReference" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionInterval">GoogleChronicleRetrohuntExecutionInterval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionIntervalOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleRetrohuntExecutionInterval
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntExecutionInterval">GoogleChronicleRetrohuntExecutionInterval</a>

---


### GoogleChronicleRetrohuntProcessIntervalOutputReference <a name="GoogleChronicleRetrohuntProcessIntervalOutputReference" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval">GoogleChronicleRetrohuntProcessInterval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessIntervalOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleRetrohuntProcessInterval
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntProcessInterval">GoogleChronicleRetrohuntProcessInterval</a>

---


### GoogleChronicleRetrohuntTimeoutsOutputReference <a name="GoogleChronicleRetrohuntTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_chronicle_retrohunt

googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts">GoogleChronicleRetrohuntTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleChronicleRetrohuntTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleChronicleRetrohunt.GoogleChronicleRetrohuntTimeouts">GoogleChronicleRetrohuntTimeouts</a>]

---



