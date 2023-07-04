# `google_datastream_connection_profile`

Refer to the Terraform Registory for docs: [`google_datastream_connection_profile`](https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile).

# `googleDatastreamConnectionProfile` Submodule <a name="`googleDatastreamConnectionProfile` Submodule" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatastreamConnectionProfile <a name="GoogleDatastreamConnectionProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile google_datastream_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_profile_id: str,
  display_name: str,
  location: str,
  bigquery_profile: GoogleDatastreamConnectionProfileBigqueryProfile = None,
  forward_ssh_connectivity: GoogleDatastreamConnectionProfileForwardSshConnectivity = None,
  gcs_profile: GoogleDatastreamConnectionProfileGcsProfile = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mysql_profile: GoogleDatastreamConnectionProfileMysqlProfile = None,
  oracle_profile: GoogleDatastreamConnectionProfileOracleProfile = None,
  postgresql_profile: GoogleDatastreamConnectionProfilePostgresqlProfile = None,
  private_connectivity: GoogleDatastreamConnectionProfilePrivateConnectivity = None,
  project: str = None,
  timeouts: GoogleDatastreamConnectionProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.connectionProfileId">connection_profile_id</a></code> | <code>str</code> | The connection profile identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.bigqueryProfile">bigquery_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.forwardSshConnectivity">forward_ssh_connectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.gcsProfile">gcs_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.mysqlProfile">mysql_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.oracleProfile">oracle_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.postgresqlProfile">postgresql_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.privateConnectivity">private_connectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_profile_id`<sup>Required</sup> <a name="connection_profile_id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.connectionProfileId"></a>

- *Type:* str

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#connection_profile_id GoogleDatastreamConnectionProfile#connection_profile_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.displayName"></a>

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#display_name GoogleDatastreamConnectionProfile#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.location"></a>

- *Type:* str

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#location GoogleDatastreamConnectionProfile#location}

---

##### `bigquery_profile`<sup>Optional</sup> <a name="bigquery_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.bigqueryProfile"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#bigquery_profile GoogleDatastreamConnectionProfile#bigquery_profile}

---

##### `forward_ssh_connectivity`<sup>Optional</sup> <a name="forward_ssh_connectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.forwardSshConnectivity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#forward_ssh_connectivity GoogleDatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `gcs_profile`<sup>Optional</sup> <a name="gcs_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.gcsProfile"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#gcs_profile GoogleDatastreamConnectionProfile#gcs_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#labels GoogleDatastreamConnectionProfile#labels}

---

##### `mysql_profile`<sup>Optional</sup> <a name="mysql_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.mysqlProfile"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#mysql_profile GoogleDatastreamConnectionProfile#mysql_profile}

---

##### `oracle_profile`<sup>Optional</sup> <a name="oracle_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.oracleProfile"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#oracle_profile GoogleDatastreamConnectionProfile#oracle_profile}

---

##### `postgresql_profile`<sup>Optional</sup> <a name="postgresql_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.postgresqlProfile"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#postgresql_profile GoogleDatastreamConnectionProfile#postgresql_profile}

---

##### `private_connectivity`<sup>Optional</sup> <a name="private_connectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.privateConnectivity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#private_connectivity GoogleDatastreamConnectionProfile#private_connectivity}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#timeouts GoogleDatastreamConnectionProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile">put_bigquery_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity">put_forward_ssh_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile">put_gcs_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile">put_mysql_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile">put_oracle_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile">put_postgresql_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity">put_private_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetBigqueryProfile">reset_bigquery_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetForwardSshConnectivity">reset_forward_ssh_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetGcsProfile">reset_gcs_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMysqlProfile">reset_mysql_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOracleProfile">reset_oracle_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPostgresqlProfile">reset_postgresql_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPrivateConnectivity">reset_private_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_bigquery_profile` <a name="put_bigquery_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile"></a>

```python
def put_bigquery_profile() -> None
```

##### `put_forward_ssh_connectivity` <a name="put_forward_ssh_connectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity"></a>

```python
def put_forward_ssh_connectivity(
  hostname: str,
  username: str,
  password: str = None,
  port: typing.Union[int, float] = None,
  private_key: str = None
) -> None
```

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.hostname"></a>

- *Type:* str

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.username"></a>

- *Type:* str

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.password"></a>

- *Type:* str

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

###### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.privateKey"></a>

- *Type:* str

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#private_key GoogleDatastreamConnectionProfile#private_key}

---

##### `put_gcs_profile` <a name="put_gcs_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile"></a>

```python
def put_gcs_profile(
  bucket: str,
  root_path: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile.parameter.bucket"></a>

- *Type:* str

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#bucket GoogleDatastreamConnectionProfile#bucket}

---

###### `root_path`<sup>Optional</sup> <a name="root_path" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile.parameter.rootPath"></a>

- *Type:* str

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#root_path GoogleDatastreamConnectionProfile#root_path}

---

##### `put_mysql_profile` <a name="put_mysql_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile"></a>

```python
def put_mysql_profile(
  hostname: str,
  password: str,
  username: str,
  port: typing.Union[int, float] = None,
  ssl_config: GoogleDatastreamConnectionProfileMysqlProfileSslConfig = None
) -> None
```

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.hostname"></a>

- *Type:* str

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.password"></a>

- *Type:* str

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.username"></a>

- *Type:* str

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

###### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.sslConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

##### `put_oracle_profile` <a name="put_oracle_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile"></a>

```python
def put_oracle_profile(
  database_service: str,
  hostname: str,
  password: str,
  username: str,
  connection_attributes: typing.Mapping[str] = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `database_service`<sup>Required</sup> <a name="database_service" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.databaseService"></a>

- *Type:* str

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#database_service GoogleDatastreamConnectionProfile#database_service}

---

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.hostname"></a>

- *Type:* str

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.password"></a>

- *Type:* str

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.username"></a>

- *Type:* str

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

###### `connection_attributes`<sup>Optional</sup> <a name="connection_attributes" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.connectionAttributes"></a>

- *Type:* typing.Mapping[str]

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#connection_attributes GoogleDatastreamConnectionProfile#connection_attributes}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `put_postgresql_profile` <a name="put_postgresql_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile"></a>

```python
def put_postgresql_profile(
  database: str,
  hostname: str,
  password: str,
  username: str,
  port: typing.Union[int, float] = None
) -> None
```

###### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.database"></a>

- *Type:* str

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.hostname"></a>

- *Type:* str

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.password"></a>

- *Type:* str

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.username"></a>

- *Type:* str

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.port"></a>

- *Type:* typing.Union[int, float]

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `put_private_connectivity` <a name="put_private_connectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity"></a>

```python
def put_private_connectivity(
  private_connection: str
) -> None
```

###### `private_connection`<sup>Required</sup> <a name="private_connection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity.parameter.privateConnection"></a>

- *Type:* str

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#private_connection GoogleDatastreamConnectionProfile#private_connection}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}.

---

##### `reset_bigquery_profile` <a name="reset_bigquery_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetBigqueryProfile"></a>

```python
def reset_bigquery_profile() -> None
```

##### `reset_forward_ssh_connectivity` <a name="reset_forward_ssh_connectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetForwardSshConnectivity"></a>

```python
def reset_forward_ssh_connectivity() -> None
```

##### `reset_gcs_profile` <a name="reset_gcs_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetGcsProfile"></a>

```python
def reset_gcs_profile() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_mysql_profile` <a name="reset_mysql_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMysqlProfile"></a>

```python
def reset_mysql_profile() -> None
```

##### `reset_oracle_profile` <a name="reset_oracle_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOracleProfile"></a>

```python
def reset_oracle_profile() -> None
```

##### `reset_postgresql_profile` <a name="reset_postgresql_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPostgresqlProfile"></a>

```python
def reset_postgresql_profile() -> None
```

##### `reset_private_connectivity` <a name="reset_private_connectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPrivateConnectivity"></a>

```python
def reset_private_connectivity() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfile">bigquery_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference">GoogleDatastreamConnectionProfileBigqueryProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivity">forward_ssh_connectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference">GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfile">gcs_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference">GoogleDatastreamConnectionProfileGcsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfile">mysql_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference">GoogleDatastreamConnectionProfileMysqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfile">oracle_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference">GoogleDatastreamConnectionProfileOracleProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfile">postgresql_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivity">private_connectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference">GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference">GoogleDatastreamConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfileInput">bigquery_profile_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileIdInput">connection_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivityInput">forward_ssh_connectivity_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfileInput">gcs_profile_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfileInput">mysql_profile_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfileInput">oracle_profile_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfileInput">postgresql_profile_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivityInput">private_connectivity_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileId">connection_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bigquery_profile`<sup>Required</sup> <a name="bigquery_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfile"></a>

```python
bigquery_profile: GoogleDatastreamConnectionProfileBigqueryProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference">GoogleDatastreamConnectionProfileBigqueryProfileOutputReference</a>

---

##### `forward_ssh_connectivity`<sup>Required</sup> <a name="forward_ssh_connectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivity"></a>

```python
forward_ssh_connectivity: GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference">GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference</a>

---

##### `gcs_profile`<sup>Required</sup> <a name="gcs_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfile"></a>

```python
gcs_profile: GoogleDatastreamConnectionProfileGcsProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference">GoogleDatastreamConnectionProfileGcsProfileOutputReference</a>

---

##### `mysql_profile`<sup>Required</sup> <a name="mysql_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfile"></a>

```python
mysql_profile: GoogleDatastreamConnectionProfileMysqlProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference">GoogleDatastreamConnectionProfileMysqlProfileOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oracle_profile`<sup>Required</sup> <a name="oracle_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfile"></a>

```python
oracle_profile: GoogleDatastreamConnectionProfileOracleProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference">GoogleDatastreamConnectionProfileOracleProfileOutputReference</a>

---

##### `postgresql_profile`<sup>Required</sup> <a name="postgresql_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfile"></a>

```python
postgresql_profile: GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference</a>

---

##### `private_connectivity`<sup>Required</sup> <a name="private_connectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivity"></a>

```python
private_connectivity: GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference">GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeouts"></a>

```python
timeouts: GoogleDatastreamConnectionProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference">GoogleDatastreamConnectionProfileTimeoutsOutputReference</a>

---

##### `bigquery_profile_input`<sup>Optional</sup> <a name="bigquery_profile_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfileInput"></a>

```python
bigquery_profile_input: GoogleDatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---

##### `connection_profile_id_input`<sup>Optional</sup> <a name="connection_profile_id_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileIdInput"></a>

```python
connection_profile_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `forward_ssh_connectivity_input`<sup>Optional</sup> <a name="forward_ssh_connectivity_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivityInput"></a>

```python
forward_ssh_connectivity_input: GoogleDatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `gcs_profile_input`<sup>Optional</sup> <a name="gcs_profile_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfileInput"></a>

```python
gcs_profile_input: GoogleDatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mysql_profile_input`<sup>Optional</sup> <a name="mysql_profile_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfileInput"></a>

```python
mysql_profile_input: GoogleDatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---

##### `oracle_profile_input`<sup>Optional</sup> <a name="oracle_profile_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfileInput"></a>

```python
oracle_profile_input: GoogleDatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---

##### `postgresql_profile_input`<sup>Optional</sup> <a name="postgresql_profile_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfileInput"></a>

```python
postgresql_profile_input: GoogleDatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---

##### `private_connectivity_input`<sup>Optional</sup> <a name="private_connectivity_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivityInput"></a>

```python
private_connectivity_input: GoogleDatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDatastreamConnectionProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>]

---

##### `connection_profile_id`<sup>Required</sup> <a name="connection_profile_id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileId"></a>

```python
connection_profile_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatastreamConnectionProfileBigqueryProfile <a name="GoogleDatastreamConnectionProfileBigqueryProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile()
```


### GoogleDatastreamConnectionProfileConfig <a name="GoogleDatastreamConnectionProfileConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_profile_id: str,
  display_name: str,
  location: str,
  bigquery_profile: GoogleDatastreamConnectionProfileBigqueryProfile = None,
  forward_ssh_connectivity: GoogleDatastreamConnectionProfileForwardSshConnectivity = None,
  gcs_profile: GoogleDatastreamConnectionProfileGcsProfile = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  mysql_profile: GoogleDatastreamConnectionProfileMysqlProfile = None,
  oracle_profile: GoogleDatastreamConnectionProfileOracleProfile = None,
  postgresql_profile: GoogleDatastreamConnectionProfilePostgresqlProfile = None,
  private_connectivity: GoogleDatastreamConnectionProfilePrivateConnectivity = None,
  project: str = None,
  timeouts: GoogleDatastreamConnectionProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connectionProfileId">connection_profile_id</a></code> | <code>str</code> | The connection profile identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.location">location</a></code> | <code>str</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.bigqueryProfile">bigquery_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forwardSshConnectivity">forward_ssh_connectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.gcsProfile">gcs_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mysqlProfile">mysql_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.oracleProfile">oracle_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.postgresqlProfile">postgresql_profile</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.privateConnectivity">private_connectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_profile_id`<sup>Required</sup> <a name="connection_profile_id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connectionProfileId"></a>

```python
connection_profile_id: str
```

- *Type:* str

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#connection_profile_id GoogleDatastreamConnectionProfile#connection_profile_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#display_name GoogleDatastreamConnectionProfile#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#location GoogleDatastreamConnectionProfile#location}

---

##### `bigquery_profile`<sup>Optional</sup> <a name="bigquery_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.bigqueryProfile"></a>

```python
bigquery_profile: GoogleDatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#bigquery_profile GoogleDatastreamConnectionProfile#bigquery_profile}

---

##### `forward_ssh_connectivity`<sup>Optional</sup> <a name="forward_ssh_connectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forwardSshConnectivity"></a>

```python
forward_ssh_connectivity: GoogleDatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#forward_ssh_connectivity GoogleDatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `gcs_profile`<sup>Optional</sup> <a name="gcs_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.gcsProfile"></a>

```python
gcs_profile: GoogleDatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#gcs_profile GoogleDatastreamConnectionProfile#gcs_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#labels GoogleDatastreamConnectionProfile#labels}

---

##### `mysql_profile`<sup>Optional</sup> <a name="mysql_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mysqlProfile"></a>

```python
mysql_profile: GoogleDatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#mysql_profile GoogleDatastreamConnectionProfile#mysql_profile}

---

##### `oracle_profile`<sup>Optional</sup> <a name="oracle_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.oracleProfile"></a>

```python
oracle_profile: GoogleDatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#oracle_profile GoogleDatastreamConnectionProfile#oracle_profile}

---

##### `postgresql_profile`<sup>Optional</sup> <a name="postgresql_profile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.postgresqlProfile"></a>

```python
postgresql_profile: GoogleDatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#postgresql_profile GoogleDatastreamConnectionProfile#postgresql_profile}

---

##### `private_connectivity`<sup>Optional</sup> <a name="private_connectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.privateConnectivity"></a>

```python
private_connectivity: GoogleDatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#private_connectivity GoogleDatastreamConnectionProfile#private_connectivity}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.timeouts"></a>

```python
timeouts: GoogleDatastreamConnectionProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#timeouts GoogleDatastreamConnectionProfile#timeouts}

---

### GoogleDatastreamConnectionProfileForwardSshConnectivity <a name="GoogleDatastreamConnectionProfileForwardSshConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity(
  hostname: str,
  username: str,
  password: str = None,
  port: typing.Union[int, float] = None,
  private_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.username">username</a></code> | <code>str</code> | Username for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.password">password</a></code> | <code>str</code> | SSH password. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.privateKey">private_key</a></code> | <code>str</code> | SSH private key. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.password"></a>

```python
password: str
```

- *Type:* str

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#private_key GoogleDatastreamConnectionProfile#private_key}

---

### GoogleDatastreamConnectionProfileGcsProfile <a name="GoogleDatastreamConnectionProfileGcsProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile(
  bucket: str,
  root_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.bucket">bucket</a></code> | <code>str</code> | The Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.rootPath">root_path</a></code> | <code>str</code> | The root path inside the Cloud Storage bucket. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#bucket GoogleDatastreamConnectionProfile#bucket}

---

##### `root_path`<sup>Optional</sup> <a name="root_path" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.rootPath"></a>

```python
root_path: str
```

- *Type:* str

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#root_path GoogleDatastreamConnectionProfile#root_path}

---

### GoogleDatastreamConnectionProfileMysqlProfile <a name="GoogleDatastreamConnectionProfileMysqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile(
  hostname: str,
  password: str,
  username: str,
  port: typing.Union[int, float] = None,
  ssl_config: GoogleDatastreamConnectionProfileMysqlProfileSslConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the MySQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.password">password</a></code> | <code>str</code> | Password for the MySQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.username">username</a></code> | <code>str</code> | Username for the MySQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the MySQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.sslConfig"></a>

```python
ssl_config: GoogleDatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

### GoogleDatastreamConnectionProfileMysqlProfileSslConfig <a name="GoogleDatastreamConnectionProfileMysqlProfileSslConfig" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig(
  ca_certificate: str = None,
  client_certificate: str = None,
  client_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate">ca_certificate</a></code> | <code>str</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey">client_key</a></code> | <code>str</code> | PEM-encoded private key associated with the Client Certificate. |

---

##### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

### GoogleDatastreamConnectionProfileOracleProfile <a name="GoogleDatastreamConnectionProfileOracleProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile(
  database_service: str,
  hostname: str,
  password: str,
  username: str,
  connection_attributes: typing.Mapping[str] = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.databaseService">database_service</a></code> | <code>str</code> | Database for the Oracle connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the Oracle connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.password">password</a></code> | <code>str</code> | Password for the Oracle connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.username">username</a></code> | <code>str</code> | Username for the Oracle connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.connectionAttributes">connection_attributes</a></code> | <code>typing.Mapping[str]</code> | Connection string attributes. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the Oracle connection. |

---

##### `database_service`<sup>Required</sup> <a name="database_service" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.databaseService"></a>

```python
database_service: str
```

- *Type:* str

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#database_service GoogleDatastreamConnectionProfile#database_service}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `connection_attributes`<sup>Optional</sup> <a name="connection_attributes" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.connectionAttributes"></a>

```python
connection_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#connection_attributes GoogleDatastreamConnectionProfile#connection_attributes}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

### GoogleDatastreamConnectionProfilePostgresqlProfile <a name="GoogleDatastreamConnectionProfilePostgresqlProfile" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile(
  database: str,
  hostname: str,
  password: str,
  username: str,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.database">database</a></code> | <code>str</code> | Database for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.hostname">hostname</a></code> | <code>str</code> | Hostname for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.password">password</a></code> | <code>str</code> | Password for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.username">username</a></code> | <code>str</code> | Username for the PostgreSQL connection. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Port for the PostgreSQL connection. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.database"></a>

```python
database: str
```

- *Type:* str

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

### GoogleDatastreamConnectionProfilePrivateConnectivity <a name="GoogleDatastreamConnectionProfilePrivateConnectivity" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity(
  private_connection: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.property.privateConnection">private_connection</a></code> | <code>str</code> | A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'. |

---

##### `private_connection`<sup>Required</sup> <a name="private_connection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.property.privateConnection"></a>

```python
private_connection: str
```

- *Type:* str

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#private_connection GoogleDatastreamConnectionProfile#private_connection}

---

### GoogleDatastreamConnectionProfileTimeouts <a name="GoogleDatastreamConnectionProfileTimeouts" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatastreamConnectionProfileBigqueryProfileOutputReference <a name="GoogleDatastreamConnectionProfileBigqueryProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileBigqueryProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---


### GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference <a name="GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey">reset_private_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileForwardSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---


### GoogleDatastreamConnectionProfileGcsProfileOutputReference <a name="GoogleDatastreamConnectionProfileGcsProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resetRootPath">reset_root_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_root_path` <a name="reset_root_path" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resetRootPath"></a>

```python
def reset_root_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput">root_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPath">root_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `root_path_input`<sup>Optional</sup> <a name="root_path_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput"></a>

```python
root_path_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `root_path`<sup>Required</sup> <a name="root_path" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPath"></a>

```python
root_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileGcsProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---


### GoogleDatastreamConnectionProfileMysqlProfileOutputReference <a name="GoogleDatastreamConnectionProfileMysqlProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig">put_ssl_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig">reset_ssl_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssl_config` <a name="put_ssl_config" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig"></a>

```python
def put_ssl_config(
  ca_certificate: str = None,
  client_certificate: str = None,
  client_key: str = None
) -> None
```

###### `ca_certificate`<sup>Optional</sup> <a name="ca_certificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.caCertificate"></a>

- *Type:* str

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

###### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.clientCertificate"></a>

- *Type:* str

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

###### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.clientKey"></a>

- *Type:* str

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_ssl_config` <a name="reset_ssl_config" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig"></a>

```python
def reset_ssl_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput">ssl_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssl_config`<sup>Required</sup> <a name="ssl_config" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig"></a>

```python
ssl_config: GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a>

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssl_config_input`<sup>Optional</sup> <a name="ssl_config_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput"></a>

```python
ssl_config_input: GoogleDatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileMysqlProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---


### GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference <a name="GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate">reset_ca_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey">reset_client_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_certificate` <a name="reset_ca_certificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate"></a>

```python
def reset_ca_certificate() -> None
```

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_key` <a name="reset_client_key" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey"></a>

```python
def reset_client_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet">ca_certificate_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet">client_certificate_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet">client_key_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput">ca_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput">client_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificate_set`<sup>Required</sup> <a name="ca_certificate_set" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet"></a>

```python
ca_certificate_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_certificate_set`<sup>Required</sup> <a name="client_certificate_set" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```python
client_certificate_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_key_set`<sup>Required</sup> <a name="client_key_set" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet"></a>

```python
client_key_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ca_certificate_input`<sup>Optional</sup> <a name="ca_certificate_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput"></a>

```python
ca_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_key_input`<sup>Optional</sup> <a name="client_key_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput"></a>

```python
client_key_input: str
```

- *Type:* str

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileMysqlProfileSslConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---


### GoogleDatastreamConnectionProfileOracleProfileOutputReference <a name="GoogleDatastreamConnectionProfileOracleProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes">reset_connection_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_attributes` <a name="reset_connection_attributes" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes"></a>

```python
def reset_connection_attributes() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput">connection_attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput">database_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes">connection_attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseService">database_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_attributes_input`<sup>Optional</sup> <a name="connection_attributes_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput"></a>

```python
connection_attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_service_input`<sup>Optional</sup> <a name="database_service_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput"></a>

```python
database_service_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `connection_attributes`<sup>Required</sup> <a name="connection_attributes" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes"></a>

```python
connection_attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `database_service`<sup>Required</sup> <a name="database_service" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseService"></a>

```python
database_service: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfileOracleProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---


### GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference <a name="GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfilePostgresqlProfile
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---


### GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference <a name="GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput">private_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection">private_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_connection_input`<sup>Optional</sup> <a name="private_connection_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```python
private_connection_input: str
```

- *Type:* str

---

##### `private_connection`<sup>Required</sup> <a name="private_connection" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection"></a>

```python
private_connection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDatastreamConnectionProfilePrivateConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---


### GoogleDatastreamConnectionProfileTimeoutsOutputReference <a name="GoogleDatastreamConnectionProfileTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_datastream_connection_profile

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDatastreamConnectionProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>]

---



