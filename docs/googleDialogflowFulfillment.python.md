# `googleDialogflowFulfillment` Submodule <a name="`googleDialogflowFulfillment` Submodule" id="@cdktf/provider-google-beta.googleDialogflowFulfillment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowFulfillment <a name="GoogleDialogflowFulfillment" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment google_dialogflow_fulfillment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  features: typing.Union[IResolvable, typing.List[GoogleDialogflowFulfillmentFeatures]] = None,
  generic_web_service: GoogleDialogflowFulfillmentGenericWebService = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleDialogflowFulfillmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether fulfillment is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.features">features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures">GoogleDialogflowFulfillmentFeatures</a>]]</code> | features block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService">GoogleDialogflowFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#id GoogleDialogflowFulfillment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#project GoogleDialogflowFulfillment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts">GoogleDialogflowFulfillmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#display_name GoogleDialogflowFulfillment#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether fulfillment is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#enabled GoogleDialogflowFulfillment#enabled}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.features"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures">GoogleDialogflowFulfillmentFeatures</a>]]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#features GoogleDialogflowFulfillment#features}

---

##### `generic_web_service`<sup>Optional</sup> <a name="generic_web_service" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.genericWebService"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService">GoogleDialogflowFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#generic_web_service GoogleDialogflowFulfillment#generic_web_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#id GoogleDialogflowFulfillment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#project GoogleDialogflowFulfillment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts">GoogleDialogflowFulfillmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#timeouts GoogleDialogflowFulfillment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putFeatures">put_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putGenericWebService">put_generic_web_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetFeatures">reset_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetGenericWebService">reset_generic_web_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_features` <a name="put_features" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putFeatures"></a>

```python
def put_features(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowFulfillmentFeatures]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putFeatures.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures">GoogleDialogflowFulfillmentFeatures</a>]]

---

##### `put_generic_web_service` <a name="put_generic_web_service" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putGenericWebService"></a>

```python
def put_generic_web_service(
  uri: str,
  password: str = None,
  request_headers: typing.Mapping[str] = None,
  username: str = None
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putGenericWebService.parameter.uri"></a>

- *Type:* str

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#uri GoogleDialogflowFulfillment#uri}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putGenericWebService.parameter.password"></a>

- *Type:* str

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#password GoogleDialogflowFulfillment#password}

---

###### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putGenericWebService.parameter.requestHeaders"></a>

- *Type:* typing.Mapping[str]

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#request_headers GoogleDialogflowFulfillment#request_headers}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putGenericWebService.parameter.username"></a>

- *Type:* str

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#username GoogleDialogflowFulfillment#username}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#create GoogleDialogflowFulfillment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#delete GoogleDialogflowFulfillment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#update GoogleDialogflowFulfillment#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_features` <a name="reset_features" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetFeatures"></a>

```python
def reset_features() -> None
```

##### `reset_generic_web_service` <a name="reset_generic_web_service" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetGenericWebService"></a>

```python
def reset_generic_web_service() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDialogflowFulfillment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDialogflowFulfillment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowFulfillment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowFulfillment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowFulfillment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.features">features</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList">GoogleDialogflowFulfillmentFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference">GoogleDialogflowFulfillmentGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference">GoogleDialogflowFulfillmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.featuresInput">features_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures">GoogleDialogflowFulfillmentFeatures</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.genericWebServiceInput">generic_web_service_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService">GoogleDialogflowFulfillmentGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts">GoogleDialogflowFulfillmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.features"></a>

```python
features: GoogleDialogflowFulfillmentFeaturesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList">GoogleDialogflowFulfillmentFeaturesList</a>

---

##### `generic_web_service`<sup>Required</sup> <a name="generic_web_service" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.genericWebService"></a>

```python
generic_web_service: GoogleDialogflowFulfillmentGenericWebServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference">GoogleDialogflowFulfillmentGenericWebServiceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.timeouts"></a>

```python
timeouts: GoogleDialogflowFulfillmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference">GoogleDialogflowFulfillmentTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `features_input`<sup>Optional</sup> <a name="features_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.featuresInput"></a>

```python
features_input: typing.Union[IResolvable, typing.List[GoogleDialogflowFulfillmentFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures">GoogleDialogflowFulfillmentFeatures</a>]]

---

##### `generic_web_service_input`<sup>Optional</sup> <a name="generic_web_service_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.genericWebServiceInput"></a>

```python
generic_web_service_input: GoogleDialogflowFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService">GoogleDialogflowFulfillmentGenericWebService</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDialogflowFulfillmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts">GoogleDialogflowFulfillmentTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowFulfillmentConfig <a name="GoogleDialogflowFulfillmentConfig" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  features: typing.Union[IResolvable, typing.List[GoogleDialogflowFulfillmentFeatures]] = None,
  generic_web_service: GoogleDialogflowFulfillmentGenericWebService = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleDialogflowFulfillmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether fulfillment is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.features">features</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures">GoogleDialogflowFulfillmentFeatures</a>]]</code> | features block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.genericWebService">generic_web_service</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService">GoogleDialogflowFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#id GoogleDialogflowFulfillment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#project GoogleDialogflowFulfillment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts">GoogleDialogflowFulfillmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#display_name GoogleDialogflowFulfillment#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether fulfillment is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#enabled GoogleDialogflowFulfillment#enabled}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.features"></a>

```python
features: typing.Union[IResolvable, typing.List[GoogleDialogflowFulfillmentFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures">GoogleDialogflowFulfillmentFeatures</a>]]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#features GoogleDialogflowFulfillment#features}

---

##### `generic_web_service`<sup>Optional</sup> <a name="generic_web_service" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.genericWebService"></a>

```python
generic_web_service: GoogleDialogflowFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService">GoogleDialogflowFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#generic_web_service GoogleDialogflowFulfillment#generic_web_service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#id GoogleDialogflowFulfillment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#project GoogleDialogflowFulfillment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowFulfillmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts">GoogleDialogflowFulfillmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#timeouts GoogleDialogflowFulfillment#timeouts}

---

### GoogleDialogflowFulfillmentFeatures <a name="GoogleDialogflowFulfillmentFeatures" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures.property.type">type</a></code> | <code>str</code> | The type of the feature that enabled for fulfillment. * SMALLTALK: Fulfillment is enabled for SmallTalk. Possible values: ["SMALLTALK"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the feature that enabled for fulfillment. * SMALLTALK: Fulfillment is enabled for SmallTalk. Possible values: ["SMALLTALK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#type GoogleDialogflowFulfillment#type}

---

### GoogleDialogflowFulfillmentGenericWebService <a name="GoogleDialogflowFulfillmentGenericWebService" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService(
  uri: str,
  password: str = None,
  request_headers: typing.Mapping[str] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService.property.uri">uri</a></code> | <code>str</code> | The fulfillment URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService.property.password">password</a></code> | <code>str</code> | The password for HTTP Basic authentication. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService.property.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | The HTTP request headers to send together with fulfillment requests. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService.property.username">username</a></code> | <code>str</code> | The user name for HTTP Basic authentication. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService.property.uri"></a>

```python
uri: str
```

- *Type:* str

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#uri GoogleDialogflowFulfillment#uri}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService.property.password"></a>

```python
password: str
```

- *Type:* str

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#password GoogleDialogflowFulfillment#password}

---

##### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService.property.requestHeaders"></a>

```python
request_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#request_headers GoogleDialogflowFulfillment#request_headers}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService.property.username"></a>

```python
username: str
```

- *Type:* str

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#username GoogleDialogflowFulfillment#username}

---

### GoogleDialogflowFulfillmentTimeouts <a name="GoogleDialogflowFulfillmentTimeouts" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#create GoogleDialogflowFulfillment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#delete GoogleDialogflowFulfillment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#update GoogleDialogflowFulfillment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#create GoogleDialogflowFulfillment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#delete GoogleDialogflowFulfillment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dialogflow_fulfillment#update GoogleDialogflowFulfillment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowFulfillmentFeaturesList <a name="GoogleDialogflowFulfillmentFeaturesList" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowFulfillmentFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures">GoogleDialogflowFulfillmentFeatures</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowFulfillmentFeatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures">GoogleDialogflowFulfillmentFeatures</a>]]

---


### GoogleDialogflowFulfillmentFeaturesOutputReference <a name="GoogleDialogflowFulfillmentFeaturesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures">GoogleDialogflowFulfillmentFeatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowFulfillmentFeatures]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentFeatures">GoogleDialogflowFulfillmentFeatures</a>]

---


### GoogleDialogflowFulfillmentGenericWebServiceOutputReference <a name="GoogleDialogflowFulfillmentGenericWebServiceOutputReference" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.resetRequestHeaders">reset_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_request_headers` <a name="reset_request_headers" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.resetRequestHeaders"></a>

```python
def reset_request_headers() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput">request_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeaders">request_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService">GoogleDialogflowFulfillmentGenericWebService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `request_headers_input`<sup>Optional</sup> <a name="request_headers_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```python
request_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `request_headers`<sup>Required</sup> <a name="request_headers" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeaders"></a>

```python
request_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebServiceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentGenericWebService">GoogleDialogflowFulfillmentGenericWebService</a>

---


### GoogleDialogflowFulfillmentTimeoutsOutputReference <a name="GoogleDialogflowFulfillmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_fulfillment

googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts">GoogleDialogflowFulfillmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowFulfillmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowFulfillment.GoogleDialogflowFulfillmentTimeouts">GoogleDialogflowFulfillmentTimeouts</a>]

---



