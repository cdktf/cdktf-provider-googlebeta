# `googleNetworkSecurityServerTlsPolicy` Submodule <a name="`googleNetworkSecurityServerTlsPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityServerTlsPolicy <a name="GoogleNetworkSecurityServerTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy google_network_security_server_tls_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy(
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
  allow_open: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  mtls_policy: GoogleNetworkSecurityServerTlsPolicyMtlsPolicy = None,
  project: str = None,
  server_certificate: GoogleNetworkSecurityServerTlsPolicyServerCertificate = None,
  timeouts: GoogleNetworkSecurityServerTlsPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.allowOpen">allow_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This field applies only for Traffic Director policies. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#id GoogleNetworkSecurityServerTlsPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the server tls policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.mtlsPolicy">mtls_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | mtls_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#project GoogleNetworkSecurityServerTlsPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.serverCertificate">server_certificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a></code> | server_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts">GoogleNetworkSecurityServerTlsPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the ServerTlsPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#name GoogleNetworkSecurityServerTlsPolicy#name}

---

##### `allow_open`<sup>Optional</sup> <a name="allow_open" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.allowOpen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This field applies only for Traffic Director policies.

It is must be set to false for external HTTPS load balancer policies.
Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.
Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#allow_open GoogleNetworkSecurityServerTlsPolicy#allow_open}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#description GoogleNetworkSecurityServerTlsPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#id GoogleNetworkSecurityServerTlsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the ServerTlsPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#labels GoogleNetworkSecurityServerTlsPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.location"></a>

- *Type:* str

The location of the server tls policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#location GoogleNetworkSecurityServerTlsPolicy#location}

---

##### `mtls_policy`<sup>Optional</sup> <a name="mtls_policy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.mtlsPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a>

mtls_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#mtls_policy GoogleNetworkSecurityServerTlsPolicy#mtls_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#project GoogleNetworkSecurityServerTlsPolicy#project}.

---

##### `server_certificate`<sup>Optional</sup> <a name="server_certificate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.serverCertificate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a>

server_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#server_certificate GoogleNetworkSecurityServerTlsPolicy#server_certificate}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts">GoogleNetworkSecurityServerTlsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#timeouts GoogleNetworkSecurityServerTlsPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putMtlsPolicy">put_mtls_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putServerCertificate">put_server_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetAllowOpen">reset_allow_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetMtlsPolicy">reset_mtls_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetServerCertificate">reset_server_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_mtls_policy` <a name="put_mtls_policy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putMtlsPolicy"></a>

```python
def put_mtls_policy(
  client_validation_ca: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa]] = None,
  client_validation_mode: str = None,
  client_validation_trust_config: str = None
) -> None
```

###### `client_validation_ca`<sup>Optional</sup> <a name="client_validation_ca" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putMtlsPolicy.parameter.clientValidationCa"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>]]

client_validation_ca block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#client_validation_ca GoogleNetworkSecurityServerTlsPolicy#client_validation_ca}

---

###### `client_validation_mode`<sup>Optional</sup> <a name="client_validation_mode" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putMtlsPolicy.parameter.clientValidationMode"></a>

- *Type:* str

When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled.

Required if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty. Possible values: ["CLIENT_VALIDATION_MODE_UNSPECIFIED", "ALLOW_INVALID_OR_MISSING_CLIENT_CERT", "REJECT_INVALID"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#client_validation_mode GoogleNetworkSecurityServerTlsPolicy#client_validation_mode}

---

###### `client_validation_trust_config`<sup>Optional</sup> <a name="client_validation_trust_config" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putMtlsPolicy.parameter.clientValidationTrustConfig"></a>

- *Type:* str

Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with external HTTPS load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#client_validation_trust_config GoogleNetworkSecurityServerTlsPolicy#client_validation_trust_config}

---

##### `put_server_certificate` <a name="put_server_certificate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putServerCertificate"></a>

```python
def put_server_certificate(
  certificate_provider_instance: GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance = None,
  grpc_endpoint: GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint = None
) -> None
```

###### `certificate_provider_instance`<sup>Optional</sup> <a name="certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putServerCertificate.parameter.certificateProviderInstance"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#certificate_provider_instance GoogleNetworkSecurityServerTlsPolicy#certificate_provider_instance}

---

###### `grpc_endpoint`<sup>Optional</sup> <a name="grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putServerCertificate.parameter.grpcEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#grpc_endpoint GoogleNetworkSecurityServerTlsPolicy#grpc_endpoint}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#create GoogleNetworkSecurityServerTlsPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#delete GoogleNetworkSecurityServerTlsPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#update GoogleNetworkSecurityServerTlsPolicy#update}.

---

##### `reset_allow_open` <a name="reset_allow_open" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetAllowOpen"></a>

```python
def reset_allow_open() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_mtls_policy` <a name="reset_mtls_policy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetMtlsPolicy"></a>

```python
def reset_mtls_policy() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_server_certificate` <a name="reset_server_certificate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetServerCertificate"></a>

```python
def reset_server_certificate() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityServerTlsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkSecurityServerTlsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkSecurityServerTlsPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkSecurityServerTlsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityServerTlsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.mtlsPolicy">mtls_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.serverCertificate">server_certificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference">GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference">GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.allowOpenInput">allow_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.mtlsPolicyInput">mtls_policy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.serverCertificateInput">server_certificate_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts">GoogleNetworkSecurityServerTlsPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.allowOpen">allow_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `mtls_policy`<sup>Required</sup> <a name="mtls_policy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.mtlsPolicy"></a>

```python
mtls_policy: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference</a>

---

##### `server_certificate`<sup>Required</sup> <a name="server_certificate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.serverCertificate"></a>

```python
server_certificate: GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference">GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference">GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `allow_open_input`<sup>Optional</sup> <a name="allow_open_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.allowOpenInput"></a>

```python
allow_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mtls_policy_input`<sup>Optional</sup> <a name="mtls_policy_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.mtlsPolicyInput"></a>

```python
mtls_policy_input: GoogleNetworkSecurityServerTlsPolicyMtlsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `server_certificate_input`<sup>Optional</sup> <a name="server_certificate_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.serverCertificateInput"></a>

```python
server_certificate_input: GoogleNetworkSecurityServerTlsPolicyServerCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkSecurityServerTlsPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts">GoogleNetworkSecurityServerTlsPolicyTimeouts</a>]

---

##### `allow_open`<sup>Required</sup> <a name="allow_open" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.allowOpen"></a>

```python
allow_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityServerTlsPolicyConfig <a name="GoogleNetworkSecurityServerTlsPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  allow_open: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  mtls_policy: GoogleNetworkSecurityServerTlsPolicyMtlsPolicy = None,
  project: str = None,
  server_certificate: GoogleNetworkSecurityServerTlsPolicyServerCertificate = None,
  timeouts: GoogleNetworkSecurityServerTlsPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.allowOpen">allow_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This field applies only for Traffic Director policies. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#id GoogleNetworkSecurityServerTlsPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the ServerTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.location">location</a></code> | <code>str</code> | The location of the server tls policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.mtlsPolicy">mtls_policy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | mtls_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#project GoogleNetworkSecurityServerTlsPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.serverCertificate">server_certificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a></code> | server_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts">GoogleNetworkSecurityServerTlsPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the ServerTlsPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#name GoogleNetworkSecurityServerTlsPolicy#name}

---

##### `allow_open`<sup>Optional</sup> <a name="allow_open" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.allowOpen"></a>

```python
allow_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This field applies only for Traffic Director policies.

It is must be set to false for external HTTPS load balancer policies.
Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if allowOpen and mtlsPolicy are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility.
Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#allow_open GoogleNetworkSecurityServerTlsPolicy#allow_open}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#description GoogleNetworkSecurityServerTlsPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#id GoogleNetworkSecurityServerTlsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the ServerTlsPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#labels GoogleNetworkSecurityServerTlsPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the server tls policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#location GoogleNetworkSecurityServerTlsPolicy#location}

---

##### `mtls_policy`<sup>Optional</sup> <a name="mtls_policy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.mtlsPolicy"></a>

```python
mtls_policy: GoogleNetworkSecurityServerTlsPolicyMtlsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a>

mtls_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#mtls_policy GoogleNetworkSecurityServerTlsPolicy#mtls_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#project GoogleNetworkSecurityServerTlsPolicy#project}.

---

##### `server_certificate`<sup>Optional</sup> <a name="server_certificate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.serverCertificate"></a>

```python
server_certificate: GoogleNetworkSecurityServerTlsPolicyServerCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a>

server_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#server_certificate GoogleNetworkSecurityServerTlsPolicy#server_certificate}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityServerTlsPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts">GoogleNetworkSecurityServerTlsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#timeouts GoogleNetworkSecurityServerTlsPolicy#timeouts}

---

### GoogleNetworkSecurityServerTlsPolicyMtlsPolicy <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy(
  client_validation_ca: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa]] = None,
  client_validation_mode: str = None,
  client_validation_trust_config: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationCa">client_validation_ca</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>]]</code> | client_validation_ca block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationMode">client_validation_mode</a></code> | <code>str</code> | When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationTrustConfig">client_validation_trust_config</a></code> | <code>str</code> | Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with external HTTPS load balancers. |

---

##### `client_validation_ca`<sup>Optional</sup> <a name="client_validation_ca" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationCa"></a>

```python
client_validation_ca: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>]]

client_validation_ca block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#client_validation_ca GoogleNetworkSecurityServerTlsPolicy#client_validation_ca}

---

##### `client_validation_mode`<sup>Optional</sup> <a name="client_validation_mode" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationMode"></a>

```python
client_validation_mode: str
```

- *Type:* str

When the client presents an invalid certificate or no certificate to the load balancer, the clientValidationMode specifies how the client connection is handled.

Required if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty. Possible values: ["CLIENT_VALIDATION_MODE_UNSPECIFIED", "ALLOW_INVALID_OR_MISSING_CLIENT_CERT", "REJECT_INVALID"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#client_validation_mode GoogleNetworkSecurityServerTlsPolicy#client_validation_mode}

---

##### `client_validation_trust_config`<sup>Optional</sup> <a name="client_validation_trust_config" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy.property.clientValidationTrustConfig"></a>

```python
client_validation_trust_config: str
```

- *Type:* str

Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with external HTTPS load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#client_validation_trust_config GoogleNetworkSecurityServerTlsPolicy#client_validation_trust_config}

---

### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa(
  certificate_provider_instance: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance = None,
  grpc_endpoint: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.certificateProviderInstance">certificate_provider_instance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.grpcEndpoint">grpc_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `certificate_provider_instance`<sup>Optional</sup> <a name="certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.certificateProviderInstance"></a>

```python
certificate_provider_instance: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#certificate_provider_instance GoogleNetworkSecurityServerTlsPolicy#certificate_provider_instance}

---

##### `grpc_endpoint`<sup>Optional</sup> <a name="grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa.property.grpcEndpoint"></a>

```python
grpc_endpoint: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#grpc_endpoint GoogleNetworkSecurityServerTlsPolicy#grpc_endpoint}

---

### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance(
  plugin_instance: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance.property.pluginInstance">plugin_instance</a></code> | <code>str</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance.property.pluginInstance"></a>

```python
plugin_instance: str
```

- *Type:* str

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#plugin_instance GoogleNetworkSecurityServerTlsPolicy#plugin_instance}

---

### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint(
  target_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint.property.targetUri">target_uri</a></code> | <code>str</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint.property.targetUri"></a>

```python
target_uri: str
```

- *Type:* str

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#target_uri GoogleNetworkSecurityServerTlsPolicy#target_uri}

---

### GoogleNetworkSecurityServerTlsPolicyServerCertificate <a name="GoogleNetworkSecurityServerTlsPolicyServerCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate(
  certificate_provider_instance: GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance = None,
  grpc_endpoint: GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate.property.certificateProviderInstance">certificate_provider_instance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate.property.grpcEndpoint">grpc_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `certificate_provider_instance`<sup>Optional</sup> <a name="certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate.property.certificateProviderInstance"></a>

```python
certificate_provider_instance: GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#certificate_provider_instance GoogleNetworkSecurityServerTlsPolicy#certificate_provider_instance}

---

##### `grpc_endpoint`<sup>Optional</sup> <a name="grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate.property.grpcEndpoint"></a>

```python
grpc_endpoint: GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#grpc_endpoint GoogleNetworkSecurityServerTlsPolicy#grpc_endpoint}

---

### GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance <a name="GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance(
  plugin_instance: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance.property.pluginInstance">plugin_instance</a></code> | <code>str</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance.property.pluginInstance"></a>

```python
plugin_instance: str
```

- *Type:* str

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#plugin_instance GoogleNetworkSecurityServerTlsPolicy#plugin_instance}

---

### GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint <a name="GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint(
  target_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint.property.targetUri">target_uri</a></code> | <code>str</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint.property.targetUri"></a>

```python
target_uri: str
```

- *Type:* str

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#target_uri GoogleNetworkSecurityServerTlsPolicy#target_uri}

---

### GoogleNetworkSecurityServerTlsPolicyTimeouts <a name="GoogleNetworkSecurityServerTlsPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#create GoogleNetworkSecurityServerTlsPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#delete GoogleNetworkSecurityServerTlsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#update GoogleNetworkSecurityServerTlsPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#create GoogleNetworkSecurityServerTlsPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#delete GoogleNetworkSecurityServerTlsPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#update GoogleNetworkSecurityServerTlsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput">plugin_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance">plugin_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plugin_instance_input`<sup>Optional</sup> <a name="plugin_instance_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```python
plugin_instance_input: str
```

- *Type:* str

---

##### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```python
plugin_instance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

---


### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUriInput">target_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUri">target_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_uri_input`<sup>Optional</sup> <a name="target_uri_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUriInput"></a>

```python
target_uri_input: str
```

- *Type:* str

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.targetUri"></a>

```python
target_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

---


### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>]]

---


### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putCertificateProviderInstance">put_certificate_provider_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putGrpcEndpoint">put_grpc_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetCertificateProviderInstance">reset_certificate_provider_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetGrpcEndpoint">reset_grpc_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate_provider_instance` <a name="put_certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putCertificateProviderInstance"></a>

```python
def put_certificate_provider_instance(
  plugin_instance: str
) -> None
```

###### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putCertificateProviderInstance.parameter.pluginInstance"></a>

- *Type:* str

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#plugin_instance GoogleNetworkSecurityServerTlsPolicy#plugin_instance}

---

##### `put_grpc_endpoint` <a name="put_grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putGrpcEndpoint"></a>

```python
def put_grpc_endpoint(
  target_uri: str
) -> None
```

###### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.putGrpcEndpoint.parameter.targetUri"></a>

- *Type:* str

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#target_uri GoogleNetworkSecurityServerTlsPolicy#target_uri}

---

##### `reset_certificate_provider_instance` <a name="reset_certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetCertificateProviderInstance"></a>

```python
def reset_certificate_provider_instance() -> None
```

##### `reset_grpc_endpoint` <a name="reset_grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.resetGrpcEndpoint"></a>

```python
def reset_grpc_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstance">certificate_provider_instance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpoint">grpc_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstanceInput">certificate_provider_instance_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpointInput">grpc_endpoint_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_provider_instance`<sup>Required</sup> <a name="certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstance"></a>

```python
certificate_provider_instance: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstanceOutputReference</a>

---

##### `grpc_endpoint`<sup>Required</sup> <a name="grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpoint"></a>

```python
grpc_endpoint: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpointOutputReference</a>

---

##### `certificate_provider_instance_input`<sup>Optional</sup> <a name="certificate_provider_instance_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.certificateProviderInstanceInput"></a>

```python
certificate_provider_instance_input: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaCertificateProviderInstance</a>

---

##### `grpc_endpoint_input`<sup>Optional</sup> <a name="grpc_endpoint_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.grpcEndpointInput"></a>

```python
grpc_endpoint_input: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaGrpcEndpoint</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>]

---


### GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.putClientValidationCa">put_client_validation_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationCa">reset_client_validation_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationMode">reset_client_validation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationTrustConfig">reset_client_validation_trust_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_validation_ca` <a name="put_client_validation_ca" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.putClientValidationCa"></a>

```python
def put_client_validation_ca(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.putClientValidationCa.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>]]

---

##### `reset_client_validation_ca` <a name="reset_client_validation_ca" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationCa"></a>

```python
def reset_client_validation_ca() -> None
```

##### `reset_client_validation_mode` <a name="reset_client_validation_mode" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationMode"></a>

```python
def reset_client_validation_mode() -> None
```

##### `reset_client_validation_trust_config` <a name="reset_client_validation_trust_config" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.resetClientValidationTrustConfig"></a>

```python
def reset_client_validation_trust_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCa">client_validation_ca</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCaInput">client_validation_ca_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationModeInput">client_validation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfigInput">client_validation_trust_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationMode">client_validation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfig">client_validation_trust_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_validation_ca`<sup>Required</sup> <a name="client_validation_ca" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCa"></a>

```python
client_validation_ca: GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCaList</a>

---

##### `client_validation_ca_input`<sup>Optional</sup> <a name="client_validation_ca_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationCaInput"></a>

```python
client_validation_ca_input: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa">GoogleNetworkSecurityServerTlsPolicyMtlsPolicyClientValidationCa</a>]]

---

##### `client_validation_mode_input`<sup>Optional</sup> <a name="client_validation_mode_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationModeInput"></a>

```python
client_validation_mode_input: str
```

- *Type:* str

---

##### `client_validation_trust_config_input`<sup>Optional</sup> <a name="client_validation_trust_config_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfigInput"></a>

```python
client_validation_trust_config_input: str
```

- *Type:* str

---

##### `client_validation_mode`<sup>Required</sup> <a name="client_validation_mode" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationMode"></a>

```python
client_validation_mode: str
```

- *Type:* str

---

##### `client_validation_trust_config`<sup>Required</sup> <a name="client_validation_trust_config" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.clientValidationTrustConfig"></a>

```python
client_validation_trust_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityServerTlsPolicyMtlsPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyMtlsPolicy">GoogleNetworkSecurityServerTlsPolicyMtlsPolicy</a>

---


### GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput">plugin_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstance">plugin_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plugin_instance_input`<sup>Optional</sup> <a name="plugin_instance_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```python
plugin_instance_input: str
```

- *Type:* str

---

##### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```python
plugin_instance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

---


### GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUriInput">target_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUri">target_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_uri_input`<sup>Optional</sup> <a name="target_uri_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUriInput"></a>

```python
target_uri_input: str
```

- *Type:* str

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.targetUri"></a>

```python
target_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

---


### GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.putCertificateProviderInstance">put_certificate_provider_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.putGrpcEndpoint">put_grpc_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetCertificateProviderInstance">reset_certificate_provider_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetGrpcEndpoint">reset_grpc_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate_provider_instance` <a name="put_certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.putCertificateProviderInstance"></a>

```python
def put_certificate_provider_instance(
  plugin_instance: str
) -> None
```

###### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.putCertificateProviderInstance.parameter.pluginInstance"></a>

- *Type:* str

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#plugin_instance GoogleNetworkSecurityServerTlsPolicy#plugin_instance}

---

##### `put_grpc_endpoint` <a name="put_grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.putGrpcEndpoint"></a>

```python
def put_grpc_endpoint(
  target_uri: str
) -> None
```

###### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.putGrpcEndpoint.parameter.targetUri"></a>

- *Type:* str

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_security_server_tls_policy#target_uri GoogleNetworkSecurityServerTlsPolicy#target_uri}

---

##### `reset_certificate_provider_instance` <a name="reset_certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetCertificateProviderInstance"></a>

```python
def reset_certificate_provider_instance() -> None
```

##### `reset_grpc_endpoint` <a name="reset_grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.resetGrpcEndpoint"></a>

```python
def reset_grpc_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstance">certificate_provider_instance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpoint">grpc_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstanceInput">certificate_provider_instance_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpointInput">grpc_endpoint_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_provider_instance`<sup>Required</sup> <a name="certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstance"></a>

```python
certificate_provider_instance: GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstanceOutputReference</a>

---

##### `grpc_endpoint`<sup>Required</sup> <a name="grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpoint"></a>

```python
grpc_endpoint: GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpointOutputReference</a>

---

##### `certificate_provider_instance_input`<sup>Optional</sup> <a name="certificate_provider_instance_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.certificateProviderInstanceInput"></a>

```python
certificate_provider_instance_input: GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance">GoogleNetworkSecurityServerTlsPolicyServerCertificateCertificateProviderInstance</a>

---

##### `grpc_endpoint_input`<sup>Optional</sup> <a name="grpc_endpoint_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.grpcEndpointInput"></a>

```python
grpc_endpoint_input: GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint">GoogleNetworkSecurityServerTlsPolicyServerCertificateGrpcEndpoint</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityServerTlsPolicyServerCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyServerCertificate">GoogleNetworkSecurityServerTlsPolicyServerCertificate</a>

---


### GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_server_tls_policy

googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts">GoogleNetworkSecurityServerTlsPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecurityServerTlsPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityServerTlsPolicy.GoogleNetworkSecurityServerTlsPolicyTimeouts">GoogleNetworkSecurityServerTlsPolicyTimeouts</a>]

---



