# `googleBeyondcorpApplication` Submodule <a name="`googleBeyondcorpApplication` Submodule" id="@cdktf/provider-google-beta.googleBeyondcorpApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpApplication <a name="GoogleBeyondcorpApplication" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application google_beyondcorp_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_application

googleBeyondcorpApplication.GoogleBeyondcorpApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  endpoint_matchers: typing.Union[IResolvable, typing.List[GoogleBeyondcorpApplicationEndpointMatchers]],
  security_gateways_id: str,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleBeyondcorpApplicationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.endpointMatchers">endpoint_matchers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers">GoogleBeyondcorpApplicationEndpointMatchers</a>]]</code> | endpoint_matchers block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.securityGatewaysId">security_gateways_id</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#id GoogleBeyondcorpApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#project GoogleBeyondcorpApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts">GoogleBeyondcorpApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.applicationId"></a>

- *Type:* str

Optional.

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#application_id GoogleBeyondcorpApplication#application_id}

---

##### `endpoint_matchers`<sup>Required</sup> <a name="endpoint_matchers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.endpointMatchers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers">GoogleBeyondcorpApplicationEndpointMatchers</a>]]

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#endpoint_matchers GoogleBeyondcorpApplication#endpoint_matchers}

---

##### `security_gateways_id`<sup>Required</sup> <a name="security_gateways_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.securityGatewaysId"></a>

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#security_gateways_id GoogleBeyondcorpApplication#security_gateways_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#display_name GoogleBeyondcorpApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#id GoogleBeyondcorpApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#project GoogleBeyondcorpApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts">GoogleBeyondcorpApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#timeouts GoogleBeyondcorpApplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putEndpointMatchers">put_endpoint_matchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint_matchers` <a name="put_endpoint_matchers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putEndpointMatchers"></a>

```python
def put_endpoint_matchers(
  value: typing.Union[IResolvable, typing.List[GoogleBeyondcorpApplicationEndpointMatchers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putEndpointMatchers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers">GoogleBeyondcorpApplicationEndpointMatchers</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#create GoogleBeyondcorpApplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#delete GoogleBeyondcorpApplication#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#update GoogleBeyondcorpApplication#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBeyondcorpApplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_application

googleBeyondcorpApplication.GoogleBeyondcorpApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_application

googleBeyondcorpApplication.GoogleBeyondcorpApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_application

googleBeyondcorpApplication.GoogleBeyondcorpApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_application

googleBeyondcorpApplication.GoogleBeyondcorpApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBeyondcorpApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBeyondcorpApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBeyondcorpApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.endpointMatchers">endpoint_matchers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList">GoogleBeyondcorpApplicationEndpointMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference">GoogleBeyondcorpApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.endpointMatchersInput">endpoint_matchers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers">GoogleBeyondcorpApplicationEndpointMatchers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.securityGatewaysIdInput">security_gateways_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts">GoogleBeyondcorpApplicationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.securityGatewaysId">security_gateways_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `endpoint_matchers`<sup>Required</sup> <a name="endpoint_matchers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.endpointMatchers"></a>

```python
endpoint_matchers: GoogleBeyondcorpApplicationEndpointMatchersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList">GoogleBeyondcorpApplicationEndpointMatchersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.timeouts"></a>

```python
timeouts: GoogleBeyondcorpApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference">GoogleBeyondcorpApplicationTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `endpoint_matchers_input`<sup>Optional</sup> <a name="endpoint_matchers_input" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.endpointMatchersInput"></a>

```python
endpoint_matchers_input: typing.Union[IResolvable, typing.List[GoogleBeyondcorpApplicationEndpointMatchers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers">GoogleBeyondcorpApplicationEndpointMatchers</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `security_gateways_id_input`<sup>Optional</sup> <a name="security_gateways_id_input" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.securityGatewaysIdInput"></a>

```python
security_gateways_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBeyondcorpApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts">GoogleBeyondcorpApplicationTimeouts</a>]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `security_gateways_id`<sup>Required</sup> <a name="security_gateways_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.securityGatewaysId"></a>

```python
security_gateways_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpApplicationConfig <a name="GoogleBeyondcorpApplicationConfig" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_application

googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  endpoint_matchers: typing.Union[IResolvable, typing.List[GoogleBeyondcorpApplicationEndpointMatchers]],
  security_gateways_id: str,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleBeyondcorpApplicationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.applicationId">application_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.endpointMatchers">endpoint_matchers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers">GoogleBeyondcorpApplicationEndpointMatchers</a>]]</code> | endpoint_matchers block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.securityGatewaysId">security_gateways_id</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#id GoogleBeyondcorpApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#project GoogleBeyondcorpApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts">GoogleBeyondcorpApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Optional.

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#application_id GoogleBeyondcorpApplication#application_id}

---

##### `endpoint_matchers`<sup>Required</sup> <a name="endpoint_matchers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.endpointMatchers"></a>

```python
endpoint_matchers: typing.Union[IResolvable, typing.List[GoogleBeyondcorpApplicationEndpointMatchers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers">GoogleBeyondcorpApplicationEndpointMatchers</a>]]

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#endpoint_matchers GoogleBeyondcorpApplication#endpoint_matchers}

---

##### `security_gateways_id`<sup>Required</sup> <a name="security_gateways_id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.securityGatewaysId"></a>

```python
security_gateways_id: str
```

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#security_gateways_id GoogleBeyondcorpApplication#security_gateways_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#display_name GoogleBeyondcorpApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#id GoogleBeyondcorpApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#project GoogleBeyondcorpApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationConfig.property.timeouts"></a>

```python
timeouts: GoogleBeyondcorpApplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts">GoogleBeyondcorpApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#timeouts GoogleBeyondcorpApplication#timeouts}

---

### GoogleBeyondcorpApplicationEndpointMatchers <a name="GoogleBeyondcorpApplicationEndpointMatchers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_application

googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers(
  hostname: str,
  ports: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers.property.hostname">hostname</a></code> | <code>str</code> | Required. Hostname of the application. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Optional. Ports of the application. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Required. Hostname of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#hostname GoogleBeyondcorpApplication#hostname}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Optional. Ports of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#ports GoogleBeyondcorpApplication#ports}

---

### GoogleBeyondcorpApplicationTimeouts <a name="GoogleBeyondcorpApplicationTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_application

googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#create GoogleBeyondcorpApplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#delete GoogleBeyondcorpApplication#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#update GoogleBeyondcorpApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#create GoogleBeyondcorpApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#delete GoogleBeyondcorpApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_beyondcorp_application#update GoogleBeyondcorpApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpApplicationEndpointMatchersList <a name="GoogleBeyondcorpApplicationEndpointMatchersList" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_application

googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBeyondcorpApplicationEndpointMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers">GoogleBeyondcorpApplicationEndpointMatchers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBeyondcorpApplicationEndpointMatchers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers">GoogleBeyondcorpApplicationEndpointMatchers</a>]]

---


### GoogleBeyondcorpApplicationEndpointMatchersOutputReference <a name="GoogleBeyondcorpApplicationEndpointMatchersOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_application

googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers">GoogleBeyondcorpApplicationEndpointMatchers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBeyondcorpApplicationEndpointMatchers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationEndpointMatchers">GoogleBeyondcorpApplicationEndpointMatchers</a>]

---


### GoogleBeyondcorpApplicationTimeoutsOutputReference <a name="GoogleBeyondcorpApplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_application

googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts">GoogleBeyondcorpApplicationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBeyondcorpApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBeyondcorpApplication.GoogleBeyondcorpApplicationTimeouts">GoogleBeyondcorpApplicationTimeouts</a>]

---



