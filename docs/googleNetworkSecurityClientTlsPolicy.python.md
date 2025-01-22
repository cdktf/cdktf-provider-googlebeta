# `googleNetworkSecurityClientTlsPolicy` Submodule <a name="`googleNetworkSecurityClientTlsPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityClientTlsPolicy <a name="GoogleNetworkSecurityClientTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy google_network_security_client_tls_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy(
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
  client_certificate: GoogleNetworkSecurityClientTlsPolicyClientCertificate = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  server_validation_ca: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityClientTlsPolicyServerValidationCa]] = None,
  sni: str = None,
  timeouts: GoogleNetworkSecurityClientTlsPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.clientCertificate">client_certificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#id GoogleNetworkSecurityClientTlsPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the client tls policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#project GoogleNetworkSecurityClientTlsPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.serverValidationCa">server_validation_ca</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>]]</code> | server_validation_ca block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.sni">sni</a></code> | <code>str</code> | Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the ClientTlsPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#name GoogleNetworkSecurityClientTlsPolicy#name}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.clientCertificate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#client_certificate GoogleNetworkSecurityClientTlsPolicy#client_certificate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#description GoogleNetworkSecurityClientTlsPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#id GoogleNetworkSecurityClientTlsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the ClientTlsPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#labels GoogleNetworkSecurityClientTlsPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.location"></a>

- *Type:* str

The location of the client tls policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#location GoogleNetworkSecurityClientTlsPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#project GoogleNetworkSecurityClientTlsPolicy#project}.

---

##### `server_validation_ca`<sup>Optional</sup> <a name="server_validation_ca" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.serverValidationCa"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>]]

server_validation_ca block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#server_validation_ca GoogleNetworkSecurityClientTlsPolicy#server_validation_ca}

---

##### `sni`<sup>Optional</sup> <a name="sni" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.sni"></a>

- *Type:* str

Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#sni GoogleNetworkSecurityClientTlsPolicy#sni}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#timeouts GoogleNetworkSecurityClientTlsPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putClientCertificate">put_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putServerValidationCa">put_server_validation_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetServerValidationCa">reset_server_validation_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetSni">reset_sni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_client_certificate` <a name="put_client_certificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putClientCertificate"></a>

```python
def put_client_certificate(
  certificate_provider_instance: GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance = None,
  grpc_endpoint: GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint = None
) -> None
```

###### `certificate_provider_instance`<sup>Optional</sup> <a name="certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putClientCertificate.parameter.certificateProviderInstance"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#certificate_provider_instance GoogleNetworkSecurityClientTlsPolicy#certificate_provider_instance}

---

###### `grpc_endpoint`<sup>Optional</sup> <a name="grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putClientCertificate.parameter.grpcEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#grpc_endpoint GoogleNetworkSecurityClientTlsPolicy#grpc_endpoint}

---

##### `put_server_validation_ca` <a name="put_server_validation_ca" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putServerValidationCa"></a>

```python
def put_server_validation_ca(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityClientTlsPolicyServerValidationCa]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putServerValidationCa.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#create GoogleNetworkSecurityClientTlsPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#delete GoogleNetworkSecurityClientTlsPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#update GoogleNetworkSecurityClientTlsPolicy#update}.

---

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_server_validation_ca` <a name="reset_server_validation_ca" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetServerValidationCa"></a>

```python
def reset_server_validation_ca() -> None
```

##### `reset_sni` <a name="reset_sni" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetSni"></a>

```python
def reset_sni() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityClientTlsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkSecurityClientTlsPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkSecurityClientTlsPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkSecurityClientTlsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityClientTlsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.clientCertificate">client_certificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.serverValidationCa">server_validation_ca</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList">GoogleNetworkSecurityClientTlsPolicyServerValidationCaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference">GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.clientCertificateInput">client_certificate_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.serverValidationCaInput">server_validation_ca_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.sniInput">sni_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.sni">sni</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.clientCertificate"></a>

```python
client_certificate: GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `server_validation_ca`<sup>Required</sup> <a name="server_validation_ca" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.serverValidationCa"></a>

```python
server_validation_ca: GoogleNetworkSecurityClientTlsPolicyServerValidationCaList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList">GoogleNetworkSecurityClientTlsPolicyServerValidationCaList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference">GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.clientCertificateInput"></a>

```python
client_certificate_input: GoogleNetworkSecurityClientTlsPolicyClientCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `server_validation_ca_input`<sup>Optional</sup> <a name="server_validation_ca_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.serverValidationCaInput"></a>

```python
server_validation_ca_input: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityClientTlsPolicyServerValidationCa]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>]]

---

##### `sni_input`<sup>Optional</sup> <a name="sni_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.sniInput"></a>

```python
sni_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkSecurityClientTlsPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `sni`<sup>Required</sup> <a name="sni" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.sni"></a>

```python
sni: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityClientTlsPolicyClientCertificate <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate(
  certificate_provider_instance: GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance = None,
  grpc_endpoint: GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.property.certificateProviderInstance">certificate_provider_instance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.property.grpcEndpoint">grpc_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `certificate_provider_instance`<sup>Optional</sup> <a name="certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.property.certificateProviderInstance"></a>

```python
certificate_provider_instance: GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#certificate_provider_instance GoogleNetworkSecurityClientTlsPolicy#certificate_provider_instance}

---

##### `grpc_endpoint`<sup>Optional</sup> <a name="grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate.property.grpcEndpoint"></a>

```python
grpc_endpoint: GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#grpc_endpoint GoogleNetworkSecurityClientTlsPolicy#grpc_endpoint}

---

### GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance(
  plugin_instance: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.property.pluginInstance">plugin_instance</a></code> | <code>str</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance.property.pluginInstance"></a>

```python
plugin_instance: str
```

- *Type:* str

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#plugin_instance GoogleNetworkSecurityClientTlsPolicy#plugin_instance}

---

### GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint(
  target_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.property.targetUri">target_uri</a></code> | <code>str</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint.property.targetUri"></a>

```python
target_uri: str
```

- *Type:* str

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#target_uri GoogleNetworkSecurityClientTlsPolicy#target_uri}

---

### GoogleNetworkSecurityClientTlsPolicyConfig <a name="GoogleNetworkSecurityClientTlsPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  client_certificate: GoogleNetworkSecurityClientTlsPolicyClientCertificate = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  server_validation_ca: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityClientTlsPolicyServerValidationCa]] = None,
  sni: str = None,
  timeouts: GoogleNetworkSecurityClientTlsPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.clientCertificate">client_certificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#id GoogleNetworkSecurityClientTlsPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the ClientTlsPolicy resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.location">location</a></code> | <code>str</code> | The location of the client tls policy. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#project GoogleNetworkSecurityClientTlsPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.serverValidationCa">server_validation_ca</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>]]</code> | server_validation_ca block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.sni">sni</a></code> | <code>str</code> | Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the ClientTlsPolicy resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#name GoogleNetworkSecurityClientTlsPolicy#name}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.clientCertificate"></a>

```python
client_certificate: GoogleNetworkSecurityClientTlsPolicyClientCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#client_certificate GoogleNetworkSecurityClientTlsPolicy#client_certificate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#description GoogleNetworkSecurityClientTlsPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#id GoogleNetworkSecurityClientTlsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the ClientTlsPolicy resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#labels GoogleNetworkSecurityClientTlsPolicy#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the client tls policy. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#location GoogleNetworkSecurityClientTlsPolicy#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#project GoogleNetworkSecurityClientTlsPolicy#project}.

---

##### `server_validation_ca`<sup>Optional</sup> <a name="server_validation_ca" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.serverValidationCa"></a>

```python
server_validation_ca: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityClientTlsPolicyServerValidationCa]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>]]

server_validation_ca block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#server_validation_ca GoogleNetworkSecurityClientTlsPolicy#server_validation_ca}

---

##### `sni`<sup>Optional</sup> <a name="sni" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.sni"></a>

```python
sni: str
```

- *Type:* str

Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#sni GoogleNetworkSecurityClientTlsPolicy#sni}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityClientTlsPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#timeouts GoogleNetworkSecurityClientTlsPolicy#timeouts}

---

### GoogleNetworkSecurityClientTlsPolicyServerValidationCa <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCa" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa(
  certificate_provider_instance: GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance = None,
  grpc_endpoint: GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.property.certificateProviderInstance">certificate_provider_instance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a></code> | certificate_provider_instance block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.property.grpcEndpoint">grpc_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a></code> | grpc_endpoint block. |

---

##### `certificate_provider_instance`<sup>Optional</sup> <a name="certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.property.certificateProviderInstance"></a>

```python
certificate_provider_instance: GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

certificate_provider_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#certificate_provider_instance GoogleNetworkSecurityClientTlsPolicy#certificate_provider_instance}

---

##### `grpc_endpoint`<sup>Optional</sup> <a name="grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa.property.grpcEndpoint"></a>

```python
grpc_endpoint: GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

grpc_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#grpc_endpoint GoogleNetworkSecurityClientTlsPolicy#grpc_endpoint}

---

### GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance(
  plugin_instance: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.property.pluginInstance">plugin_instance</a></code> | <code>str</code> | Plugin instance name, used to locate and load CertificateProvider instance configuration. |

---

##### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance.property.pluginInstance"></a>

```python
plugin_instance: str
```

- *Type:* str

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#plugin_instance GoogleNetworkSecurityClientTlsPolicy#plugin_instance}

---

### GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint(
  target_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.property.targetUri">target_uri</a></code> | <code>str</code> | The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". |

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint.property.targetUri"></a>

```python
target_uri: str
```

- *Type:* str

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#target_uri GoogleNetworkSecurityClientTlsPolicy#target_uri}

---

### GoogleNetworkSecurityClientTlsPolicyTimeouts <a name="GoogleNetworkSecurityClientTlsPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#create GoogleNetworkSecurityClientTlsPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#delete GoogleNetworkSecurityClientTlsPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#update GoogleNetworkSecurityClientTlsPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#create GoogleNetworkSecurityClientTlsPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#delete GoogleNetworkSecurityClientTlsPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#update GoogleNetworkSecurityClientTlsPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput">plugin_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstance">plugin_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plugin_instance_input`<sup>Optional</sup> <a name="plugin_instance_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```python
plugin_instance_input: str
```

- *Type:* str

---

##### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```python
plugin_instance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

---


### GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUriInput">target_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUri">target_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_uri_input`<sup>Optional</sup> <a name="target_uri_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUriInput"></a>

```python
target_uri_input: str
```

- *Type:* str

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.targetUri"></a>

```python
target_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

---


### GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putCertificateProviderInstance">put_certificate_provider_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putGrpcEndpoint">put_grpc_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetCertificateProviderInstance">reset_certificate_provider_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetGrpcEndpoint">reset_grpc_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate_provider_instance` <a name="put_certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putCertificateProviderInstance"></a>

```python
def put_certificate_provider_instance(
  plugin_instance: str
) -> None
```

###### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putCertificateProviderInstance.parameter.pluginInstance"></a>

- *Type:* str

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#plugin_instance GoogleNetworkSecurityClientTlsPolicy#plugin_instance}

---

##### `put_grpc_endpoint` <a name="put_grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putGrpcEndpoint"></a>

```python
def put_grpc_endpoint(
  target_uri: str
) -> None
```

###### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.putGrpcEndpoint.parameter.targetUri"></a>

- *Type:* str

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#target_uri GoogleNetworkSecurityClientTlsPolicy#target_uri}

---

##### `reset_certificate_provider_instance` <a name="reset_certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetCertificateProviderInstance"></a>

```python
def reset_certificate_provider_instance() -> None
```

##### `reset_grpc_endpoint` <a name="reset_grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.resetGrpcEndpoint"></a>

```python
def reset_grpc_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstance">certificate_provider_instance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpoint">grpc_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstanceInput">certificate_provider_instance_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpointInput">grpc_endpoint_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_provider_instance`<sup>Required</sup> <a name="certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstance"></a>

```python
certificate_provider_instance: GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference</a>

---

##### `grpc_endpoint`<sup>Required</sup> <a name="grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpoint"></a>

```python
grpc_endpoint: GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference</a>

---

##### `certificate_provider_instance_input`<sup>Optional</sup> <a name="certificate_provider_instance_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.certificateProviderInstanceInput"></a>

```python
certificate_provider_instance_input: GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance</a>

---

##### `grpc_endpoint_input`<sup>Optional</sup> <a name="grpc_endpoint_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.grpcEndpointInput"></a>

```python
grpc_endpoint_input: GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityClientTlsPolicyClientCertificate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyClientCertificate">GoogleNetworkSecurityClientTlsPolicyClientCertificate</a>

---


### GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput">plugin_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance">plugin_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plugin_instance_input`<sup>Optional</sup> <a name="plugin_instance_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstanceInput"></a>

```python
plugin_instance_input: str
```

- *Type:* str

---

##### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.pluginInstance"></a>

```python
plugin_instance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

---


### GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUriInput">target_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUri">target_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_uri_input`<sup>Optional</sup> <a name="target_uri_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUriInput"></a>

```python
target_uri_input: str
```

- *Type:* str

---

##### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.targetUri"></a>

```python
target_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

---


### GoogleNetworkSecurityClientTlsPolicyServerValidationCaList <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaList" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkSecurityClientTlsPolicyServerValidationCa]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>]]

---


### GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putCertificateProviderInstance">put_certificate_provider_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putGrpcEndpoint">put_grpc_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetCertificateProviderInstance">reset_certificate_provider_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetGrpcEndpoint">reset_grpc_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate_provider_instance` <a name="put_certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putCertificateProviderInstance"></a>

```python
def put_certificate_provider_instance(
  plugin_instance: str
) -> None
```

###### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putCertificateProviderInstance.parameter.pluginInstance"></a>

- *Type:* str

Plugin instance name, used to locate and load CertificateProvider instance configuration.

Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#plugin_instance GoogleNetworkSecurityClientTlsPolicy#plugin_instance}

---

##### `put_grpc_endpoint` <a name="put_grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putGrpcEndpoint"></a>

```python
def put_grpc_endpoint(
  target_uri: str
) -> None
```

###### `target_uri`<sup>Required</sup> <a name="target_uri" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.putGrpcEndpoint.parameter.targetUri"></a>

- *Type:* str

The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_client_tls_policy#target_uri GoogleNetworkSecurityClientTlsPolicy#target_uri}

---

##### `reset_certificate_provider_instance` <a name="reset_certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetCertificateProviderInstance"></a>

```python
def reset_certificate_provider_instance() -> None
```

##### `reset_grpc_endpoint` <a name="reset_grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.resetGrpcEndpoint"></a>

```python
def reset_grpc_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstance">certificate_provider_instance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpoint">grpc_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstanceInput">certificate_provider_instance_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpointInput">grpc_endpoint_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_provider_instance`<sup>Required</sup> <a name="certificate_provider_instance" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstance"></a>

```python
certificate_provider_instance: GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference</a>

---

##### `grpc_endpoint`<sup>Required</sup> <a name="grpc_endpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpoint"></a>

```python
grpc_endpoint: GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference</a>

---

##### `certificate_provider_instance_input`<sup>Optional</sup> <a name="certificate_provider_instance_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.certificateProviderInstanceInput"></a>

```python
certificate_provider_instance_input: GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance">GoogleNetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance</a>

---

##### `grpc_endpoint_input`<sup>Optional</sup> <a name="grpc_endpoint_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.grpcEndpointInput"></a>

```python
grpc_endpoint_input: GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint">GoogleNetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecurityClientTlsPolicyServerValidationCa]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyServerValidationCa">GoogleNetworkSecurityClientTlsPolicyServerValidationCa</a>]

---


### GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_client_tls_policy

googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecurityClientTlsPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityClientTlsPolicy.GoogleNetworkSecurityClientTlsPolicyTimeouts">GoogleNetworkSecurityClientTlsPolicyTimeouts</a>]

---



