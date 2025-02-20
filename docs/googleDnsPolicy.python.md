# `googleDnsPolicy` Submodule <a name="`googleDnsPolicy` Submodule" id="@cdktf/provider-google-beta.googleDnsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDnsPolicy <a name="GoogleDnsPolicy" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy google_dns_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicy(
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
  alternative_name_server_config: GoogleDnsPolicyAlternativeNameServerConfig = None,
  description: str = None,
  enable_inbound_forwarding: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  networks: typing.Union[IResolvable, typing.List[GoogleDnsPolicyNetworks]] = None,
  project: str = None,
  timeouts: GoogleDnsPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | User assigned name for this policy. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.alternativeNameServerConfig">alternative_name_server_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a></code> | alternative_name_server_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.enableInboundForwarding">enable_inbound_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#id GoogleDnsPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks">GoogleDnsPolicyNetworks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#project GoogleDnsPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts">GoogleDnsPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.name"></a>

- *Type:* str

User assigned name for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#name GoogleDnsPolicy#name}

---

##### `alternative_name_server_config`<sup>Optional</sup> <a name="alternative_name_server_config" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.alternativeNameServerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a>

alternative_name_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#alternative_name_server_config GoogleDnsPolicy#alternative_name_server_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.description"></a>

- *Type:* str

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#description GoogleDnsPolicy#description}

---

##### `enable_inbound_forwarding`<sup>Optional</sup> <a name="enable_inbound_forwarding" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.enableInboundForwarding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections.

When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#enable_inbound_forwarding GoogleDnsPolicy#enable_inbound_forwarding}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#enable_logging GoogleDnsPolicy#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#id GoogleDnsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.networks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks">GoogleDnsPolicyNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#networks GoogleDnsPolicy#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#project GoogleDnsPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts">GoogleDnsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#timeouts GoogleDnsPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putAlternativeNameServerConfig">put_alternative_name_server_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putNetworks">put_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetAlternativeNameServerConfig">reset_alternative_name_server_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetEnableInboundForwarding">reset_enable_inbound_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetNetworks">reset_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alternative_name_server_config` <a name="put_alternative_name_server_config" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putAlternativeNameServerConfig"></a>

```python
def put_alternative_name_server_config(
  target_name_servers: typing.Union[IResolvable, typing.List[GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers]]
) -> None
```

###### `target_name_servers`<sup>Required</sup> <a name="target_name_servers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putAlternativeNameServerConfig.parameter.targetNameServers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#target_name_servers GoogleDnsPolicy#target_name_servers}

---

##### `put_networks` <a name="put_networks" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putNetworks"></a>

```python
def put_networks(
  value: typing.Union[IResolvable, typing.List[GoogleDnsPolicyNetworks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putNetworks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks">GoogleDnsPolicyNetworks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#create GoogleDnsPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#delete GoogleDnsPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#update GoogleDnsPolicy#update}.

---

##### `reset_alternative_name_server_config` <a name="reset_alternative_name_server_config" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetAlternativeNameServerConfig"></a>

```python
def reset_alternative_name_server_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_inbound_forwarding` <a name="reset_enable_inbound_forwarding" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetEnableInboundForwarding"></a>

```python
def reset_enable_inbound_forwarding() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_networks` <a name="reset_networks" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetNetworks"></a>

```python
def reset_networks() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDnsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDnsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDnsPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDnsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDnsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.alternativeNameServerConfig">alternative_name_server_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference">GoogleDnsPolicyAlternativeNameServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList">GoogleDnsPolicyNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference">GoogleDnsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.alternativeNameServerConfigInput">alternative_name_server_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableInboundForwardingInput">enable_inbound_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.networksInput">networks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks">GoogleDnsPolicyNetworks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts">GoogleDnsPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableInboundForwarding">enable_inbound_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alternative_name_server_config`<sup>Required</sup> <a name="alternative_name_server_config" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.alternativeNameServerConfig"></a>

```python
alternative_name_server_config: GoogleDnsPolicyAlternativeNameServerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference">GoogleDnsPolicyAlternativeNameServerConfigOutputReference</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.networks"></a>

```python
networks: GoogleDnsPolicyNetworksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList">GoogleDnsPolicyNetworksList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.timeouts"></a>

```python
timeouts: GoogleDnsPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference">GoogleDnsPolicyTimeoutsOutputReference</a>

---

##### `alternative_name_server_config_input`<sup>Optional</sup> <a name="alternative_name_server_config_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.alternativeNameServerConfigInput"></a>

```python
alternative_name_server_config_input: GoogleDnsPolicyAlternativeNameServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_inbound_forwarding_input`<sup>Optional</sup> <a name="enable_inbound_forwarding_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableInboundForwardingInput"></a>

```python
enable_inbound_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networks_input`<sup>Optional</sup> <a name="networks_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.networksInput"></a>

```python
networks_input: typing.Union[IResolvable, typing.List[GoogleDnsPolicyNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks">GoogleDnsPolicyNetworks</a>]]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDnsPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts">GoogleDnsPolicyTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_inbound_forwarding`<sup>Required</sup> <a name="enable_inbound_forwarding" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableInboundForwarding"></a>

```python
enable_inbound_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDnsPolicyAlternativeNameServerConfig <a name="GoogleDnsPolicyAlternativeNameServerConfig" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig(
  target_name_servers: typing.Union[IResolvable, typing.List[GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig.property.targetNameServers">target_name_servers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]</code> | target_name_servers block. |

---

##### `target_name_servers`<sup>Required</sup> <a name="target_name_servers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig.property.targetNameServers"></a>

```python
target_name_servers: typing.Union[IResolvable, typing.List[GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#target_name_servers GoogleDnsPolicy#target_name_servers}

---

### GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers <a name="GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers(
  ipv4_address: str,
  forwarding_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | IPv4 address to forward to. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers.property.forwardingPath">forwarding_path</a></code> | <code>str</code> | Forwarding path for this TargetNameServer. |

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

IPv4 address to forward to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#ipv4_address GoogleDnsPolicy#ipv4_address}

---

##### `forwarding_path`<sup>Optional</sup> <a name="forwarding_path" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers.property.forwardingPath"></a>

```python
forwarding_path: str
```

- *Type:* str

Forwarding path for this TargetNameServer.

If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#forwarding_path GoogleDnsPolicy#forwarding_path}

---

### GoogleDnsPolicyConfig <a name="GoogleDnsPolicyConfig" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  alternative_name_server_config: GoogleDnsPolicyAlternativeNameServerConfig = None,
  description: str = None,
  enable_inbound_forwarding: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  id: str = None,
  networks: typing.Union[IResolvable, typing.List[GoogleDnsPolicyNetworks]] = None,
  project: str = None,
  timeouts: GoogleDnsPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.name">name</a></code> | <code>str</code> | User assigned name for this policy. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.alternativeNameServerConfig">alternative_name_server_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a></code> | alternative_name_server_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.description">description</a></code> | <code>str</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.enableInboundForwarding">enable_inbound_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#id GoogleDnsPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.networks">networks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks">GoogleDnsPolicyNetworks</a>]]</code> | networks block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#project GoogleDnsPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts">GoogleDnsPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

User assigned name for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#name GoogleDnsPolicy#name}

---

##### `alternative_name_server_config`<sup>Optional</sup> <a name="alternative_name_server_config" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.alternativeNameServerConfig"></a>

```python
alternative_name_server_config: GoogleDnsPolicyAlternativeNameServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a>

alternative_name_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#alternative_name_server_config GoogleDnsPolicy#alternative_name_server_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#description GoogleDnsPolicy#description}

---

##### `enable_inbound_forwarding`<sup>Optional</sup> <a name="enable_inbound_forwarding" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.enableInboundForwarding"></a>

```python
enable_inbound_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows networks bound to this policy to receive DNS queries sent by VMs or applications over VPN connections.

When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#enable_inbound_forwarding GoogleDnsPolicy#enable_inbound_forwarding}

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether logging is enabled for the networks bound to this policy. Defaults to no logging if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#enable_logging GoogleDnsPolicy#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#id GoogleDnsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.networks"></a>

```python
networks: typing.Union[IResolvable, typing.List[GoogleDnsPolicyNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks">GoogleDnsPolicyNetworks</a>]]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#networks GoogleDnsPolicy#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#project GoogleDnsPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleDnsPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts">GoogleDnsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#timeouts GoogleDnsPolicy#timeouts}

---

### GoogleDnsPolicyNetworks <a name="GoogleDnsPolicyNetworks" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicyNetworks(
  network_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks.property.networkUrl">network_url</a></code> | <code>str</code> | The id or fully qualified URL of the VPC network to forward queries to. |

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#network_url GoogleDnsPolicy#network_url}

---

### GoogleDnsPolicyTimeouts <a name="GoogleDnsPolicyTimeouts" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#create GoogleDnsPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#delete GoogleDnsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#update GoogleDnsPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#create GoogleDnsPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#delete GoogleDnsPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_policy#update GoogleDnsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDnsPolicyAlternativeNameServerConfigOutputReference <a name="GoogleDnsPolicyAlternativeNameServerConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers">put_target_name_servers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_name_servers` <a name="put_target_name_servers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers"></a>

```python
def put_target_name_servers(
  value: typing.Union[IResolvable, typing.List[GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.putTargetNameServers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServers">target_name_servers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServersInput">target_name_servers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_name_servers`<sup>Required</sup> <a name="target_name_servers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServers"></a>

```python
target_name_servers: GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList</a>

---

##### `target_name_servers_input`<sup>Optional</sup> <a name="target_name_servers_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.targetNameServersInput"></a>

```python
target_name_servers_input: typing.Union[IResolvable, typing.List[GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDnsPolicyAlternativeNameServerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfig">GoogleDnsPolicyAlternativeNameServerConfig</a>

---


### GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList <a name="GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers</a>]]

---


### GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference <a name="GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resetForwardingPath">reset_forwarding_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forwarding_path` <a name="reset_forwarding_path" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.resetForwardingPath"></a>

```python
def reset_forwarding_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPathInput">forwarding_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4AddressInput">ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPath">forwarding_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4Address">ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forwarding_path_input`<sup>Optional</sup> <a name="forwarding_path_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPathInput"></a>

```python
forwarding_path_input: str
```

- *Type:* str

---

##### `ipv4_address_input`<sup>Optional</sup> <a name="ipv4_address_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4AddressInput"></a>

```python
ipv4_address_input: str
```

- *Type:* str

---

##### `forwarding_path`<sup>Required</sup> <a name="forwarding_path" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.forwardingPath"></a>

```python
forwarding_path: str
```

- *Type:* str

---

##### `ipv4_address`<sup>Required</sup> <a name="ipv4_address" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.ipv4Address"></a>

```python
ipv4_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers">GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers</a>]

---


### GoogleDnsPolicyNetworksList <a name="GoogleDnsPolicyNetworksList" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicyNetworksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDnsPolicyNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks">GoogleDnsPolicyNetworks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDnsPolicyNetworks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks">GoogleDnsPolicyNetworks</a>]]

---


### GoogleDnsPolicyNetworksOutputReference <a name="GoogleDnsPolicyNetworksOutputReference" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.networkUrlInput">network_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.networkUrl">network_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks">GoogleDnsPolicyNetworks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_url_input`<sup>Optional</sup> <a name="network_url_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.networkUrlInput"></a>

```python
network_url_input: str
```

- *Type:* str

---

##### `network_url`<sup>Required</sup> <a name="network_url" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.networkUrl"></a>

```python
network_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsPolicyNetworks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyNetworks">GoogleDnsPolicyNetworks</a>]

---


### GoogleDnsPolicyTimeoutsOutputReference <a name="GoogleDnsPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dns_policy

googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts">GoogleDnsPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDnsPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDnsPolicy.GoogleDnsPolicyTimeouts">GoogleDnsPolicyTimeouts</a>]

---



