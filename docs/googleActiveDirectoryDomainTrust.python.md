# `googleActiveDirectoryDomainTrust` Submodule <a name="`googleActiveDirectoryDomainTrust` Submodule" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleActiveDirectoryDomainTrust <a name="GoogleActiveDirectoryDomainTrust" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust google_active_directory_domain_trust}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_active_directory_domain_trust

googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  target_dns_ip_addresses: typing.List[str],
  target_domain_name: str,
  trust_direction: str,
  trust_handshake_secret: str,
  trust_type: str,
  id: str = None,
  project: str = None,
  selective_authentication: typing.Union[bool, IResolvable] = None,
  timeouts: GoogleActiveDirectoryDomainTrustTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.domain">domain</a></code> | <code>str</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.targetDnsIpAddresses">target_dns_ip_addresses</a></code> | <code>typing.List[str]</code> | The target DNS server IP addresses which can resolve the remote domain involved in the trust. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.targetDomainName">target_domain_name</a></code> | <code>str</code> | The fully qualified target domain name which will be in trust with the current domain. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.trustDirection">trust_direction</a></code> | <code>str</code> | The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.trustHandshakeSecret">trust_handshake_secret</a></code> | <code>str</code> | The trust secret used for the handshake with the target domain. This will not be stored. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.trustType">trust_type</a></code> | <code>str</code> | The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#id GoogleActiveDirectoryDomainTrust#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#project GoogleActiveDirectoryDomainTrust#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.selectiveAuthentication">selective_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the trusted side has forest/domain wide access or selective access to an approved set of resources. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts">GoogleActiveDirectoryDomainTrustTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.domain"></a>

- *Type:* str

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#domain GoogleActiveDirectoryDomainTrust#domain}

---

##### `target_dns_ip_addresses`<sup>Required</sup> <a name="target_dns_ip_addresses" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.targetDnsIpAddresses"></a>

- *Type:* typing.List[str]

The target DNS server IP addresses which can resolve the remote domain involved in the trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#target_dns_ip_addresses GoogleActiveDirectoryDomainTrust#target_dns_ip_addresses}

---

##### `target_domain_name`<sup>Required</sup> <a name="target_domain_name" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.targetDomainName"></a>

- *Type:* str

The fully qualified target domain name which will be in trust with the current domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#target_domain_name GoogleActiveDirectoryDomainTrust#target_domain_name}

---

##### `trust_direction`<sup>Required</sup> <a name="trust_direction" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.trustDirection"></a>

- *Type:* str

The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#trust_direction GoogleActiveDirectoryDomainTrust#trust_direction}

---

##### `trust_handshake_secret`<sup>Required</sup> <a name="trust_handshake_secret" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.trustHandshakeSecret"></a>

- *Type:* str

The trust secret used for the handshake with the target domain. This will not be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#trust_handshake_secret GoogleActiveDirectoryDomainTrust#trust_handshake_secret}

---

##### `trust_type`<sup>Required</sup> <a name="trust_type" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.trustType"></a>

- *Type:* str

The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#trust_type GoogleActiveDirectoryDomainTrust#trust_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#id GoogleActiveDirectoryDomainTrust#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#project GoogleActiveDirectoryDomainTrust#project}.

---

##### `selective_authentication`<sup>Optional</sup> <a name="selective_authentication" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.selectiveAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#selective_authentication GoogleActiveDirectoryDomainTrust#selective_authentication}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts">GoogleActiveDirectoryDomainTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#timeouts GoogleActiveDirectoryDomainTrust#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetSelectiveAuthentication">reset_selective_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#create GoogleActiveDirectoryDomainTrust#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#delete GoogleActiveDirectoryDomainTrust#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#update GoogleActiveDirectoryDomainTrust#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_selective_authentication` <a name="reset_selective_authentication" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetSelectiveAuthentication"></a>

```python
def reset_selective_authentication() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleActiveDirectoryDomainTrust resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_active_directory_domain_trust

googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_active_directory_domain_trust

googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_active_directory_domain_trust

googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_active_directory_domain_trust

googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleActiveDirectoryDomainTrust resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleActiveDirectoryDomainTrust to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleActiveDirectoryDomainTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleActiveDirectoryDomainTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference">GoogleActiveDirectoryDomainTrustTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.selectiveAuthenticationInput">selective_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDnsIpAddressesInput">target_dns_ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDomainNameInput">target_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts">GoogleActiveDirectoryDomainTrustTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustDirectionInput">trust_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustHandshakeSecretInput">trust_handshake_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustTypeInput">trust_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.selectiveAuthentication">selective_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDnsIpAddresses">target_dns_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDomainName">target_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustDirection">trust_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustHandshakeSecret">trust_handshake_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustType">trust_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.timeouts"></a>

```python
timeouts: GoogleActiveDirectoryDomainTrustTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference">GoogleActiveDirectoryDomainTrustTimeoutsOutputReference</a>

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `selective_authentication_input`<sup>Optional</sup> <a name="selective_authentication_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.selectiveAuthenticationInput"></a>

```python
selective_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_dns_ip_addresses_input`<sup>Optional</sup> <a name="target_dns_ip_addresses_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDnsIpAddressesInput"></a>

```python
target_dns_ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_domain_name_input`<sup>Optional</sup> <a name="target_domain_name_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDomainNameInput"></a>

```python
target_domain_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleActiveDirectoryDomainTrustTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts">GoogleActiveDirectoryDomainTrustTimeouts</a>]

---

##### `trust_direction_input`<sup>Optional</sup> <a name="trust_direction_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustDirectionInput"></a>

```python
trust_direction_input: str
```

- *Type:* str

---

##### `trust_handshake_secret_input`<sup>Optional</sup> <a name="trust_handshake_secret_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustHandshakeSecretInput"></a>

```python
trust_handshake_secret_input: str
```

- *Type:* str

---

##### `trust_type_input`<sup>Optional</sup> <a name="trust_type_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustTypeInput"></a>

```python
trust_type_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `selective_authentication`<sup>Required</sup> <a name="selective_authentication" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.selectiveAuthentication"></a>

```python
selective_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_dns_ip_addresses`<sup>Required</sup> <a name="target_dns_ip_addresses" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDnsIpAddresses"></a>

```python
target_dns_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_domain_name`<sup>Required</sup> <a name="target_domain_name" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.targetDomainName"></a>

```python
target_domain_name: str
```

- *Type:* str

---

##### `trust_direction`<sup>Required</sup> <a name="trust_direction" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustDirection"></a>

```python
trust_direction: str
```

- *Type:* str

---

##### `trust_handshake_secret`<sup>Required</sup> <a name="trust_handshake_secret" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustHandshakeSecret"></a>

```python
trust_handshake_secret: str
```

- *Type:* str

---

##### `trust_type`<sup>Required</sup> <a name="trust_type" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.trustType"></a>

```python
trust_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrust.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleActiveDirectoryDomainTrustConfig <a name="GoogleActiveDirectoryDomainTrustConfig" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_active_directory_domain_trust

googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  target_dns_ip_addresses: typing.List[str],
  target_domain_name: str,
  trust_direction: str,
  trust_handshake_secret: str,
  trust_type: str,
  id: str = None,
  project: str = None,
  selective_authentication: typing.Union[bool, IResolvable] = None,
  timeouts: GoogleActiveDirectoryDomainTrustTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.domain">domain</a></code> | <code>str</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.targetDnsIpAddresses">target_dns_ip_addresses</a></code> | <code>typing.List[str]</code> | The target DNS server IP addresses which can resolve the remote domain involved in the trust. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.targetDomainName">target_domain_name</a></code> | <code>str</code> | The fully qualified target domain name which will be in trust with the current domain. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.trustDirection">trust_direction</a></code> | <code>str</code> | The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.trustHandshakeSecret">trust_handshake_secret</a></code> | <code>str</code> | The trust secret used for the handshake with the target domain. This will not be stored. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.trustType">trust_type</a></code> | <code>str</code> | The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#id GoogleActiveDirectoryDomainTrust#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#project GoogleActiveDirectoryDomainTrust#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.selectiveAuthentication">selective_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the trusted side has forest/domain wide access or selective access to an approved set of resources. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts">GoogleActiveDirectoryDomainTrustTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#domain GoogleActiveDirectoryDomainTrust#domain}

---

##### `target_dns_ip_addresses`<sup>Required</sup> <a name="target_dns_ip_addresses" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.targetDnsIpAddresses"></a>

```python
target_dns_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

The target DNS server IP addresses which can resolve the remote domain involved in the trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#target_dns_ip_addresses GoogleActiveDirectoryDomainTrust#target_dns_ip_addresses}

---

##### `target_domain_name`<sup>Required</sup> <a name="target_domain_name" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.targetDomainName"></a>

```python
target_domain_name: str
```

- *Type:* str

The fully qualified target domain name which will be in trust with the current domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#target_domain_name GoogleActiveDirectoryDomainTrust#target_domain_name}

---

##### `trust_direction`<sup>Required</sup> <a name="trust_direction" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.trustDirection"></a>

```python
trust_direction: str
```

- *Type:* str

The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#trust_direction GoogleActiveDirectoryDomainTrust#trust_direction}

---

##### `trust_handshake_secret`<sup>Required</sup> <a name="trust_handshake_secret" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.trustHandshakeSecret"></a>

```python
trust_handshake_secret: str
```

- *Type:* str

The trust secret used for the handshake with the target domain. This will not be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#trust_handshake_secret GoogleActiveDirectoryDomainTrust#trust_handshake_secret}

---

##### `trust_type`<sup>Required</sup> <a name="trust_type" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.trustType"></a>

```python
trust_type: str
```

- *Type:* str

The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#trust_type GoogleActiveDirectoryDomainTrust#trust_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#id GoogleActiveDirectoryDomainTrust#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#project GoogleActiveDirectoryDomainTrust#project}.

---

##### `selective_authentication`<sup>Optional</sup> <a name="selective_authentication" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.selectiveAuthentication"></a>

```python
selective_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#selective_authentication GoogleActiveDirectoryDomainTrust#selective_authentication}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustConfig.property.timeouts"></a>

```python
timeouts: GoogleActiveDirectoryDomainTrustTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts">GoogleActiveDirectoryDomainTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#timeouts GoogleActiveDirectoryDomainTrust#timeouts}

---

### GoogleActiveDirectoryDomainTrustTimeouts <a name="GoogleActiveDirectoryDomainTrustTimeouts" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_active_directory_domain_trust

googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#create GoogleActiveDirectoryDomainTrust#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#delete GoogleActiveDirectoryDomainTrust#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#update GoogleActiveDirectoryDomainTrust#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#create GoogleActiveDirectoryDomainTrust#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#delete GoogleActiveDirectoryDomainTrust#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_active_directory_domain_trust#update GoogleActiveDirectoryDomainTrust#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleActiveDirectoryDomainTrustTimeoutsOutputReference <a name="GoogleActiveDirectoryDomainTrustTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_active_directory_domain_trust

googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts">GoogleActiveDirectoryDomainTrustTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleActiveDirectoryDomainTrustTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleActiveDirectoryDomainTrust.GoogleActiveDirectoryDomainTrustTimeouts">GoogleActiveDirectoryDomainTrustTimeouts</a>]

---



