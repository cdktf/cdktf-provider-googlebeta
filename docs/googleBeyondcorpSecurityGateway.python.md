# `googleBeyondcorpSecurityGateway` Submodule <a name="`googleBeyondcorpSecurityGateway` Submodule" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpSecurityGateway <a name="GoogleBeyondcorpSecurityGateway" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway google_beyondcorp_security_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway(
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
  security_gateway_id: str,
  display_name: str = None,
  hubs: typing.Union[IResolvable, typing.List[GoogleBeyondcorpSecurityGatewayHubs]] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleBeyondcorpSecurityGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.hubs">hubs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]]</code> | hubs block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#id GoogleBeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#project GoogleBeyondcorpSecurityGateway#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#location GoogleBeyondcorpSecurityGateway#location}

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.securityGatewayId"></a>

- *Type:* str

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#security_gateway_id GoogleBeyondcorpSecurityGateway#security_gateway_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#display_name GoogleBeyondcorpSecurityGateway#display_name}

---

##### `hubs`<sup>Optional</sup> <a name="hubs" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.hubs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]]

hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#hubs GoogleBeyondcorpSecurityGateway#hubs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#id GoogleBeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#project GoogleBeyondcorpSecurityGateway#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#timeouts GoogleBeyondcorpSecurityGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putHubs">put_hubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetHubs">reset_hubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_hubs` <a name="put_hubs" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putHubs"></a>

```python
def put_hubs(
  value: typing.Union[IResolvable, typing.List[GoogleBeyondcorpSecurityGatewayHubs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putHubs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#create GoogleBeyondcorpSecurityGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#delete GoogleBeyondcorpSecurityGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#update GoogleBeyondcorpSecurityGateway#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_hubs` <a name="reset_hubs" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetHubs"></a>

```python
def reset_hubs() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBeyondcorpSecurityGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBeyondcorpSecurityGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBeyondcorpSecurityGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBeyondcorpSecurityGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpSecurityGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.externalIps">external_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.hubs">hubs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList">GoogleBeyondcorpSecurityGatewayHubsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.hubsInput">hubs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.securityGatewayIdInput">security_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `external_ips`<sup>Required</sup> <a name="external_ips" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.externalIps"></a>

```python
external_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hubs`<sup>Required</sup> <a name="hubs" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.hubs"></a>

```python
hubs: GoogleBeyondcorpSecurityGatewayHubsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList">GoogleBeyondcorpSecurityGatewayHubsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.timeouts"></a>

```python
timeouts: GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `hubs_input`<sup>Optional</sup> <a name="hubs_input" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.hubsInput"></a>

```python
hubs_input: typing.Union[IResolvable, typing.List[GoogleBeyondcorpSecurityGatewayHubs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `security_gateway_id_input`<sup>Optional</sup> <a name="security_gateway_id_input" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.securityGatewayIdInput"></a>

```python
security_gateway_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBeyondcorpSecurityGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.securityGatewayId"></a>

```python
security_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpSecurityGatewayConfig <a name="GoogleBeyondcorpSecurityGatewayConfig" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  security_gateway_id: str,
  display_name: str = None,
  hubs: typing.Union[IResolvable, typing.List[GoogleBeyondcorpSecurityGatewayHubs]] = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleBeyondcorpSecurityGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.securityGatewayId">security_gateway_id</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.hubs">hubs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]]</code> | hubs block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#id GoogleBeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#project GoogleBeyondcorpSecurityGateway#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#location GoogleBeyondcorpSecurityGateway#location}

---

##### `security_gateway_id`<sup>Required</sup> <a name="security_gateway_id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.securityGatewayId"></a>

```python
security_gateway_id: str
```

- *Type:* str

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#security_gateway_id GoogleBeyondcorpSecurityGateway#security_gateway_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#display_name GoogleBeyondcorpSecurityGateway#display_name}

---

##### `hubs`<sup>Optional</sup> <a name="hubs" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.hubs"></a>

```python
hubs: typing.Union[IResolvable, typing.List[GoogleBeyondcorpSecurityGatewayHubs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]]

hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#hubs GoogleBeyondcorpSecurityGateway#hubs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#id GoogleBeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#project GoogleBeyondcorpSecurityGateway#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.timeouts"></a>

```python
timeouts: GoogleBeyondcorpSecurityGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#timeouts GoogleBeyondcorpSecurityGateway#timeouts}

---

### GoogleBeyondcorpSecurityGatewayHubs <a name="GoogleBeyondcorpSecurityGatewayHubs" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs(
  region: str,
  internet_gateway: GoogleBeyondcorpSecurityGatewayHubsInternetGateway = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#region GoogleBeyondcorpSecurityGateway#region}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.property.internetGateway">internet_gateway</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a></code> | internet_gateway block. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#region GoogleBeyondcorpSecurityGateway#region}.

---

##### `internet_gateway`<sup>Optional</sup> <a name="internet_gateway" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.property.internetGateway"></a>

```python
internet_gateway: GoogleBeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

internet_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#internet_gateway GoogleBeyondcorpSecurityGateway#internet_gateway}

---

### GoogleBeyondcorpSecurityGatewayHubsInternetGateway <a name="GoogleBeyondcorpSecurityGatewayHubsInternetGateway" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway()
```


### GoogleBeyondcorpSecurityGatewayTimeouts <a name="GoogleBeyondcorpSecurityGatewayTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#create GoogleBeyondcorpSecurityGateway#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#delete GoogleBeyondcorpSecurityGateway#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#update GoogleBeyondcorpSecurityGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#create GoogleBeyondcorpSecurityGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#delete GoogleBeyondcorpSecurityGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_beyondcorp_security_gateway#update GoogleBeyondcorpSecurityGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference <a name="GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps">assigned_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assigned_ips`<sup>Required</sup> <a name="assigned_ips" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps"></a>

```python
assigned_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

---


### GoogleBeyondcorpSecurityGatewayHubsList <a name="GoogleBeyondcorpSecurityGatewayHubsList" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBeyondcorpSecurityGatewayHubsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBeyondcorpSecurityGatewayHubs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]]

---


### GoogleBeyondcorpSecurityGatewayHubsOutputReference <a name="GoogleBeyondcorpSecurityGatewayHubsOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway">put_internet_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway">reset_internet_gateway</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_internet_gateway` <a name="put_internet_gateway" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway"></a>

```python
def put_internet_gateway() -> None
```

##### `reset_internet_gateway` <a name="reset_internet_gateway" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway"></a>

```python
def reset_internet_gateway() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway">internet_gateway</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput">internet_gateway_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internet_gateway`<sup>Required</sup> <a name="internet_gateway" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway"></a>

```python
internet_gateway: GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a>

---

##### `internet_gateway_input`<sup>Optional</sup> <a name="internet_gateway_input" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput"></a>

```python
internet_gateway_input: GoogleBeyondcorpSecurityGatewayHubsInternetGateway
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBeyondcorpSecurityGatewayHubs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>]

---


### GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference <a name="GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_beyondcorp_security_gateway

googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBeyondcorpSecurityGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>]

---



