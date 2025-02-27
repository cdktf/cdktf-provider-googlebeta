# `googleNetworkSecurityAuthorizationPolicy` Submodule <a name="`googleNetworkSecurityAuthorizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityAuthorizationPolicy <a name="GoogleNetworkSecurityAuthorizationPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy google_network_security_authorization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  rules: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRules]] = None,
  timeouts: GoogleNetworkSecurityAuthorizationPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.action">action</a></code> | <code>str</code> | The action to take when a rule match is found. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the AuthorizationPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#id GoogleNetworkSecurityAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the AuthorizationPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the authorization policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#project GoogleNetworkSecurityAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.action"></a>

- *Type:* str

The action to take when a rule match is found.

Possible values are "ALLOW" or "DENY". Possible values: ["ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#action GoogleNetworkSecurityAuthorizationPolicy#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the AuthorizationPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#name GoogleNetworkSecurityAuthorizationPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#description GoogleNetworkSecurityAuthorizationPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#id GoogleNetworkSecurityAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the AuthorizationPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#labels GoogleNetworkSecurityAuthorizationPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.location"></a>

- *Type:* str

The location of the authorization policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#location GoogleNetworkSecurityAuthorizationPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#project GoogleNetworkSecurityAuthorizationPolicy#project}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#rules GoogleNetworkSecurityAuthorizationPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#timeouts GoogleNetworkSecurityAuthorizationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#create GoogleNetworkSecurityAuthorizationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#delete GoogleNetworkSecurityAuthorizationPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#update GoogleNetworkSecurityAuthorizationPolicy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityAuthorizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkSecurityAuthorizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkSecurityAuthorizationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkSecurityAuthorizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityAuthorizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList">GoogleNetworkSecurityAuthorizationPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference">GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rules"></a>

```python
rules: GoogleNetworkSecurityAuthorizationPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList">GoogleNetworkSecurityAuthorizationPolicyRulesList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference">GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkSecurityAuthorizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityAuthorizationPolicyConfig <a name="GoogleNetworkSecurityAuthorizationPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  rules: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRules]] = None,
  timeouts: GoogleNetworkSecurityAuthorizationPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.action">action</a></code> | <code>str</code> | The action to take when a rule match is found. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the AuthorizationPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#id GoogleNetworkSecurityAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the AuthorizationPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.location">location</a></code> | <code>str</code> | The location of the authorization policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#project GoogleNetworkSecurityAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The action to take when a rule match is found.

Possible values are "ALLOW" or "DENY". Possible values: ["ALLOW", "DENY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#action GoogleNetworkSecurityAuthorizationPolicy#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the AuthorizationPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#name GoogleNetworkSecurityAuthorizationPolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#description GoogleNetworkSecurityAuthorizationPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#id GoogleNetworkSecurityAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the AuthorizationPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#labels GoogleNetworkSecurityAuthorizationPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the authorization policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#location GoogleNetworkSecurityAuthorizationPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#project GoogleNetworkSecurityAuthorizationPolicy#project}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#rules GoogleNetworkSecurityAuthorizationPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityAuthorizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#timeouts GoogleNetworkSecurityAuthorizationPolicy#timeouts}

---

### GoogleNetworkSecurityAuthorizationPolicyRules <a name="GoogleNetworkSecurityAuthorizationPolicyRules" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules(
  destinations: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRulesDestinations]] = None,
  sources: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRulesSources]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>]]</code> | destinations block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.sources">sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>]]</code> | sources block. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.destinations"></a>

```python
destinations: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRulesDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#destinations GoogleNetworkSecurityAuthorizationPolicy#destinations}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules.property.sources"></a>

```python
sources: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRulesSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>]]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#sources GoogleNetworkSecurityAuthorizationPolicy#sources}

---

### GoogleNetworkSecurityAuthorizationPolicyRulesDestinations <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations(
  hosts: typing.List[str],
  methods: typing.List[str],
  ports: typing.List[typing.Union[int, float]],
  http_header_match: GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | List of host names to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.methods">methods</a></code> | <code>typing.List[str]</code> | A list of HTTP methods to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | List of destination ports to match. At least one port should match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.httpHeaderMatch">http_header_match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a></code> | http_header_match block. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

List of host names to match.

Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.*") or a suffix match (example "*.myorg.com") or a presence (any) match "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#hosts GoogleNetworkSecurityAuthorizationPolicy#hosts}

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

A list of HTTP methods to match.

At least one method should match. Should not be set for gRPC services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#methods GoogleNetworkSecurityAuthorizationPolicy#methods}

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

List of destination ports to match. At least one port should match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#ports GoogleNetworkSecurityAuthorizationPolicy#ports}

---

##### `http_header_match`<sup>Optional</sup> <a name="http_header_match" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations.property.httpHeaderMatch"></a>

```python
http_header_match: GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

http_header_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#http_header_match GoogleNetworkSecurityAuthorizationPolicy#http_header_match}

---

### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch(
  header_name: str,
  regex_match: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.headerName">header_name</a></code> | <code>str</code> | The name of the HTTP header to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.regexMatch">regex_match</a></code> | <code>str</code> | The value of the header must match the regular expression specified in regexMatch. |

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

The name of the HTTP header to match.

For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#header_name GoogleNetworkSecurityAuthorizationPolicy#header_name}

---

##### `regex_match`<sup>Required</sup> <a name="regex_match" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch.property.regexMatch"></a>

```python
regex_match: str
```

- *Type:* str

The value of the header must match the regular expression specified in regexMatch.

For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#regex_match GoogleNetworkSecurityAuthorizationPolicy#regex_match}

---

### GoogleNetworkSecurityAuthorizationPolicyRulesSources <a name="GoogleNetworkSecurityAuthorizationPolicyRulesSources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources(
  ip_blocks: typing.List[str] = None,
  principals: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.ipBlocks">ip_blocks</a></code> | <code>typing.List[str]</code> | List of CIDR ranges to match based on source IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.principals">principals</a></code> | <code>typing.List[str]</code> | List of peer identities to match for authorization. |

---

##### `ip_blocks`<sup>Optional</sup> <a name="ip_blocks" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.ipBlocks"></a>

```python
ip_blocks: typing.List[str]
```

- *Type:* typing.List[str]

List of CIDR ranges to match based on source IP address.

At least one IP block should match. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported. Authorization based on source IP alone should be avoided.
The IP addresses of any load balancers or proxies should be considered untrusted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#ip_blocks GoogleNetworkSecurityAuthorizationPolicy#ip_blocks}

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

List of peer identities to match for authorization.

At least one principal should match. Each peer can be an exact match, or a prefix match (example, "namespace/*") or a suffix match (example, "* /service-account") or a presence match "*".
Authorization based on the principal name without certificate validation (configured by ServerTlsPolicy resource) is considered insecure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#principals GoogleNetworkSecurityAuthorizationPolicy#principals}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleNetworkSecurityAuthorizationPolicyTimeouts <a name="GoogleNetworkSecurityAuthorizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#create GoogleNetworkSecurityAuthorizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#delete GoogleNetworkSecurityAuthorizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#update GoogleNetworkSecurityAuthorizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#create GoogleNetworkSecurityAuthorizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#delete GoogleNetworkSecurityAuthorizationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#update GoogleNetworkSecurityAuthorizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatchInput">regex_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatch">regex_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `regex_match_input`<sup>Optional</sup> <a name="regex_match_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatchInput"></a>

```python
regex_match_input: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `regex_match`<sup>Required</sup> <a name="regex_match" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.regexMatch"></a>

```python
regex_match: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

---


### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRulesDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>]]

---


### GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch">put_http_header_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resetHttpHeaderMatch">reset_http_header_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http_header_match` <a name="put_http_header_match" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch"></a>

```python
def put_http_header_match(
  header_name: str,
  regex_match: str
) -> None
```

###### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch.parameter.headerName"></a>

- *Type:* str

The name of the HTTP header to match.

For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#header_name GoogleNetworkSecurityAuthorizationPolicy#header_name}

---

###### `regex_match`<sup>Required</sup> <a name="regex_match" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.putHttpHeaderMatch.parameter.regexMatch"></a>

- *Type:* str

The value of the header must match the regular expression specified in regexMatch.

For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_security_authorization_policy#regex_match GoogleNetworkSecurityAuthorizationPolicy#regex_match}

---

##### `reset_http_header_match` <a name="reset_http_header_match" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.resetHttpHeaderMatch"></a>

```python
def reset_http_header_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatch">http_header_match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hostsInput">hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatchInput">http_header_match_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methodsInput">methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methods">methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_header_match`<sup>Required</sup> <a name="http_header_match" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatch"></a>

```python
http_header_match: GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatchOutputReference</a>

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hostsInput"></a>

```python
hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_header_match_input`<sup>Optional</sup> <a name="http_header_match_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.httpHeaderMatchInput"></a>

```python
http_header_match_input: GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsHttpHeaderMatch</a>

---

##### `methods_input`<sup>Optional</sup> <a name="methods_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methodsInput"></a>

```python
methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecurityAuthorizationPolicyRulesDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>]

---


### GoogleNetworkSecurityAuthorizationPolicyRulesList <a name="GoogleNetworkSecurityAuthorizationPolicyRulesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>]]

---


### GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetSources">reset_sources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRulesDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>]]

---

##### `put_sources` <a name="put_sources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putSources"></a>

```python
def put_sources(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRulesSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.putSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>]]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.resetSources"></a>

```python
def reset_sources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList">GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sourcesInput">sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinations"></a>

```python
destinations: GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList">GoogleNetworkSecurityAuthorizationPolicyRulesDestinationsList</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sources"></a>

```python
sources: GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList">GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRulesDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesDestinations">GoogleNetworkSecurityAuthorizationPolicyRulesDestinations</a>]]

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.sourcesInput"></a>

```python
sources_input: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRulesSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecurityAuthorizationPolicyRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRules">GoogleNetworkSecurityAuthorizationPolicyRules</a>]

---


### GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList <a name="GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityAuthorizationPolicyRulesSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>]]

---


### GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetIpBlocks">reset_ip_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetPrincipals">reset_principals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_blocks` <a name="reset_ip_blocks" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetIpBlocks"></a>

```python
def reset_ip_blocks() -> None
```

##### `reset_principals` <a name="reset_principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.resetPrincipals"></a>

```python
def reset_principals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocksInput">ip_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principalsInput">principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocks">ip_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_blocks_input`<sup>Optional</sup> <a name="ip_blocks_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocksInput"></a>

```python
ip_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principalsInput"></a>

```python
principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_blocks`<sup>Required</sup> <a name="ip_blocks" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.ipBlocks"></a>

```python
ip_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecurityAuthorizationPolicyRulesSources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyRulesSources">GoogleNetworkSecurityAuthorizationPolicyRulesSources</a>]

---


### GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_authorization_policy

googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecurityAuthorizationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityAuthorizationPolicy.GoogleNetworkSecurityAuthorizationPolicyTimeouts">GoogleNetworkSecurityAuthorizationPolicyTimeouts</a>]

---



