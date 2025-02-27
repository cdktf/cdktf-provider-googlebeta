# `googleOracleDatabaseCloudExadataInfrastructure` Submodule <a name="`googleOracleDatabaseCloudExadataInfrastructure` Submodule" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseCloudExadataInfrastructure <a name="GoogleOracleDatabaseCloudExadataInfrastructure" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure google_oracle_database_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_exadata_infrastructure_id: str,
  location: str,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  gcp_oracle_zone: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  properties: GoogleOracleDatabaseCloudExadataInfrastructureProperties = None,
  timeouts: GoogleOracleDatabaseCloudExadataInfrastructureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | The ID of the Exadata Infrastructure to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | GCP location where Oracle Exadata is hosted. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#id GoogleOracleDatabaseCloudExadataInfrastructure#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#project GoogleOracleDatabaseCloudExadataInfrastructure#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* str

The ID of the Exadata Infrastructure to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#cloud_exadata_infrastructure_id GoogleOracleDatabaseCloudExadataInfrastructure#cloud_exadata_infrastructure_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#location GoogleOracleDatabaseCloudExadataInfrastructure#location}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#deletion_protection GoogleOracleDatabaseCloudExadataInfrastructure#deletion_protection}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.displayName"></a>

- *Type:* str

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#display_name GoogleOracleDatabaseCloudExadataInfrastructure#display_name}

---

##### `gcp_oracle_zone`<sup>Optional</sup> <a name="gcp_oracle_zone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.gcpOracleZone"></a>

- *Type:* str

GCP location where Oracle Exadata is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#gcp_oracle_zone GoogleOracleDatabaseCloudExadataInfrastructure#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#id GoogleOracleDatabaseCloudExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#labels GoogleOracleDatabaseCloudExadataInfrastructure#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#project GoogleOracleDatabaseCloudExadataInfrastructure#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#properties GoogleOracleDatabaseCloudExadataInfrastructure#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#timeouts GoogleOracleDatabaseCloudExadataInfrastructure#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetGcpOracleZone">reset_gcp_oracle_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties"></a>

```python
def put_properties(
  shape: str,
  compute_count: typing.Union[int, float] = None,
  customer_contacts: typing.Union[IResolvable, typing.List[GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]] = None,
  maintenance_window: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow = None,
  storage_count: typing.Union[int, float] = None,
  total_storage_size_gb: typing.Union[int, float] = None
) -> None
```

###### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties.parameter.shape"></a>

- *Type:* str

The shape of the Exadata Infrastructure.

The shape determines the
amount of CPU, storage, and memory resources allocated to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#shape GoogleOracleDatabaseCloudExadataInfrastructure#shape}

---

###### `compute_count`<sup>Optional</sup> <a name="compute_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties.parameter.computeCount"></a>

- *Type:* typing.Union[int, float]

The number of compute servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#compute_count GoogleOracleDatabaseCloudExadataInfrastructure#compute_count}

---

###### `customer_contacts`<sup>Optional</sup> <a name="customer_contacts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties.parameter.customerContacts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#customer_contacts GoogleOracleDatabaseCloudExadataInfrastructure#customer_contacts}

---

###### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#maintenance_window GoogleOracleDatabaseCloudExadataInfrastructure#maintenance_window}

---

###### `storage_count`<sup>Optional</sup> <a name="storage_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties.parameter.storageCount"></a>

- *Type:* typing.Union[int, float]

The number of Cloud Exadata storage servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#storage_count GoogleOracleDatabaseCloudExadataInfrastructure#storage_count}

---

###### `total_storage_size_gb`<sup>Optional</sup> <a name="total_storage_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties.parameter.totalStorageSizeGb"></a>

- *Type:* typing.Union[int, float]

The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#total_storage_size_gb GoogleOracleDatabaseCloudExadataInfrastructure#total_storage_size_gb}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#create GoogleOracleDatabaseCloudExadataInfrastructure#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#delete GoogleOracleDatabaseCloudExadataInfrastructure#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#update GoogleOracleDatabaseCloudExadataInfrastructure#update}.

---

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_gcp_oracle_zone` <a name="reset_gcp_oracle_zone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetGcpOracleZone"></a>

```python
def reset_gcp_oracle_zone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleOracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleOracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleOracleDatabaseCloudExadataInfrastructure to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleOracleDatabaseCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference">GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput">cloud_exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZoneInput">gcp_oracle_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.properties"></a>

```python
properties: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.timeouts"></a>

```python
timeouts: GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference">GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference</a>

---

##### `cloud_exadata_infrastructure_id_input`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput"></a>

```python
cloud_exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `gcp_oracle_zone_input`<sup>Optional</sup> <a name="gcp_oracle_zone_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZoneInput"></a>

```python
gcp_oracle_zone_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.propertiesInput"></a>

```python
properties_input: GoogleOracleDatabaseCloudExadataInfrastructureProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleOracleDatabaseCloudExadataInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a>]

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `gcp_oracle_zone`<sup>Required</sup> <a name="gcp_oracle_zone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseCloudExadataInfrastructureConfig <a name="GoogleOracleDatabaseCloudExadataInfrastructureConfig" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_exadata_infrastructure_id: str,
  location: str,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  gcp_oracle_zone: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  properties: GoogleOracleDatabaseCloudExadataInfrastructureProperties = None,
  timeouts: GoogleOracleDatabaseCloudExadataInfrastructureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | The ID of the Exadata Infrastructure to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.displayName">display_name</a></code> | <code>str</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | GCP location where Oracle Exadata is hosted. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#id GoogleOracleDatabaseCloudExadataInfrastructure#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#project GoogleOracleDatabaseCloudExadataInfrastructure#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

The ID of the Exadata Infrastructure to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#cloud_exadata_infrastructure_id GoogleOracleDatabaseCloudExadataInfrastructure#cloud_exadata_infrastructure_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#location GoogleOracleDatabaseCloudExadataInfrastructure#location}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#deletion_protection GoogleOracleDatabaseCloudExadataInfrastructure#deletion_protection}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#display_name GoogleOracleDatabaseCloudExadataInfrastructure#display_name}

---

##### `gcp_oracle_zone`<sup>Optional</sup> <a name="gcp_oracle_zone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

GCP location where Oracle Exadata is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#gcp_oracle_zone GoogleOracleDatabaseCloudExadataInfrastructure#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#id GoogleOracleDatabaseCloudExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#labels GoogleOracleDatabaseCloudExadataInfrastructure#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#project GoogleOracleDatabaseCloudExadataInfrastructure#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.properties"></a>

```python
properties: GoogleOracleDatabaseCloudExadataInfrastructureProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#properties GoogleOracleDatabaseCloudExadataInfrastructure#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.timeouts"></a>

```python
timeouts: GoogleOracleDatabaseCloudExadataInfrastructureTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#timeouts GoogleOracleDatabaseCloudExadataInfrastructure#timeouts}

---

### GoogleOracleDatabaseCloudExadataInfrastructureProperties <a name="GoogleOracleDatabaseCloudExadataInfrastructureProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties(
  shape: str,
  compute_count: typing.Union[int, float] = None,
  customer_contacts: typing.Union[IResolvable, typing.List[GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]] = None,
  maintenance_window: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow = None,
  storage_count: typing.Union[int, float] = None,
  total_storage_size_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.shape">shape</a></code> | <code>str</code> | The shape of the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | The number of compute servers for the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.customerContacts">customer_contacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]</code> | customer_contacts block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | The number of Cloud Exadata storage servers for the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.totalStorageSizeGb">total_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB). |

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.shape"></a>

```python
shape: str
```

- *Type:* str

The shape of the Exadata Infrastructure.

The shape determines the
amount of CPU, storage, and memory resources allocated to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#shape GoogleOracleDatabaseCloudExadataInfrastructure#shape}

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of compute servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#compute_count GoogleOracleDatabaseCloudExadataInfrastructure#compute_count}

---

##### `customer_contacts`<sup>Optional</sup> <a name="customer_contacts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.customerContacts"></a>

```python
customer_contacts: typing.Union[IResolvable, typing.List[GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#customer_contacts GoogleOracleDatabaseCloudExadataInfrastructure#customer_contacts}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.maintenanceWindow"></a>

```python
maintenance_window: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#maintenance_window GoogleOracleDatabaseCloudExadataInfrastructure#maintenance_window}

---

##### `storage_count`<sup>Optional</sup> <a name="storage_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.storageCount"></a>

```python
storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of Cloud Exadata storage servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#storage_count GoogleOracleDatabaseCloudExadataInfrastructure#storage_count}

---

##### `total_storage_size_gb`<sup>Optional</sup> <a name="total_storage_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.totalStorageSizeGb"></a>

```python
total_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#total_storage_size_gb GoogleOracleDatabaseCloudExadataInfrastructure#total_storage_size_gb}

---

### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts(
  email: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.property.email">email</a></code> | <code>str</code> | The email address used by Oracle to send notifications regarding databases and infrastructure. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.property.email"></a>

```python
email: str
```

- *Type:* str

The email address used by Oracle to send notifications regarding databases and infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#email GoogleOracleDatabaseCloudExadataInfrastructure#email}

---

### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow(
  custom_action_timeout_mins: typing.Union[int, float] = None,
  days_of_week: typing.List[str] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  is_custom_action_timeout_enabled: typing.Union[bool, IResolvable] = None,
  lead_time_week: typing.Union[int, float] = None,
  months: typing.List[str] = None,
  patching_mode: str = None,
  preference: str = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.customActionTimeoutMins">custom_action_timeout_mins</a></code> | <code>typing.Union[int, float]</code> | Determines the amount of time the system will wait before the start of each database server patching operation. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | Days during the week when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The window of hours during the day when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.leadTimeWeek">lead_time_week</a></code> | <code>typing.Union[int, float]</code> | Lead time window allows user to set a lead time to prepare for a down time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.months">months</a></code> | <code>typing.List[str]</code> | Months during the year when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.patchingMode">patching_mode</a></code> | <code>str</code> | Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.preference">preference</a></code> | <code>str</code> | The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Weeks during the month when maintenance should be performed. |

---

##### `custom_action_timeout_mins`<sup>Optional</sup> <a name="custom_action_timeout_mins" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.customActionTimeoutMins"></a>

```python
custom_action_timeout_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Determines the amount of time the system will wait before the start of each database server patching operation.

Custom action timeout is in minutes and
valid value is between 15 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#custom_action_timeout_mins GoogleOracleDatabaseCloudExadataInfrastructure#custom_action_timeout_mins}

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

Days during the week when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#days_of_week GoogleOracleDatabaseCloudExadataInfrastructure#days_of_week}

---

##### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The window of hours during the day when maintenance should be performed.

The window is a 4 hour slot. Valid values are:
0 - represents time slot 0:00 - 3:59 UTC
4 - represents time slot 4:00 - 7:59 UTC
8 - represents time slot 8:00 - 11:59 UTC
12 - represents time slot 12:00 - 15:59 UTC
16 - represents time slot 16:00 - 19:59 UTC
20 - represents time slot 20:00 - 23:59 UTC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#hours_of_day GoogleOracleDatabaseCloudExadataInfrastructure#hours_of_day}

---

##### `is_custom_action_timeout_enabled`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#is_custom_action_timeout_enabled GoogleOracleDatabaseCloudExadataInfrastructure#is_custom_action_timeout_enabled}

---

##### `lead_time_week`<sup>Optional</sup> <a name="lead_time_week" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.leadTimeWeek"></a>

```python
lead_time_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lead time window allows user to set a lead time to prepare for a down time.

The lead time is in weeks and valid value is between 1 to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#lead_time_week GoogleOracleDatabaseCloudExadataInfrastructure#lead_time_week}

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

Months during the year when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#months GoogleOracleDatabaseCloudExadataInfrastructure#months}

---

##### `patching_mode`<sup>Optional</sup> <a name="patching_mode" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#patching_mode GoogleOracleDatabaseCloudExadataInfrastructure#patching_mode}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.preference"></a>

```python
preference: str
```

- *Type:* str

The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#preference GoogleOracleDatabaseCloudExadataInfrastructure#preference}

---

##### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Weeks during the month when maintenance should be performed.

Weeks start on
the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7
days. Weeks start and end based on calendar dates, not days of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#weeks_of_month GoogleOracleDatabaseCloudExadataInfrastructure#weeks_of_month}

---

### GoogleOracleDatabaseCloudExadataInfrastructureTimeouts <a name="GoogleOracleDatabaseCloudExadataInfrastructureTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#create GoogleOracleDatabaseCloudExadataInfrastructure#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#delete GoogleOracleDatabaseCloudExadataInfrastructure#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#update GoogleOracleDatabaseCloudExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#create GoogleOracleDatabaseCloudExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#delete GoogleOracleDatabaseCloudExadataInfrastructure#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#update GoogleOracleDatabaseCloudExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]

---


### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]

---


### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetCustomActionTimeoutMins">reset_custom_action_timeout_mins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetHoursOfDay">reset_hours_of_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">reset_is_custom_action_timeout_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetLeadTimeWeek">reset_lead_time_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetMonths">reset_months</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPatchingMode">reset_patching_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPreference">reset_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetWeeksOfMonth">reset_weeks_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_action_timeout_mins` <a name="reset_custom_action_timeout_mins" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetCustomActionTimeoutMins"></a>

```python
def reset_custom_action_timeout_mins() -> None
```

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_hours_of_day` <a name="reset_hours_of_day" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```python
def reset_hours_of_day() -> None
```

##### `reset_is_custom_action_timeout_enabled` <a name="reset_is_custom_action_timeout_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```python
def reset_is_custom_action_timeout_enabled() -> None
```

##### `reset_lead_time_week` <a name="reset_lead_time_week" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetLeadTimeWeek"></a>

```python
def reset_lead_time_week() -> None
```

##### `reset_months` <a name="reset_months" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetMonths"></a>

```python
def reset_months() -> None
```

##### `reset_patching_mode` <a name="reset_patching_mode" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPatchingMode"></a>

```python
def reset_patching_mode() -> None
```

##### `reset_preference` <a name="reset_preference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPreference"></a>

```python
def reset_preference() -> None
```

##### `reset_weeks_of_month` <a name="reset_weeks_of_month" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```python
def reset_weeks_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMinsInput">custom_action_timeout_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDayInput">hours_of_day_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">is_custom_action_timeout_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeekInput">lead_time_week_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.monthsInput">months_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingModeInput">patching_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preferenceInput">preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeks_of_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins">custom_action_timeout_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek">lead_time_week</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months">months</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_action_timeout_mins_input`<sup>Optional</sup> <a name="custom_action_timeout_mins_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMinsInput"></a>

```python
custom_action_timeout_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours_of_day_input`<sup>Optional</sup> <a name="hours_of_day_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```python
hours_of_day_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled_input`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```python
is_custom_action_timeout_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lead_time_week_input`<sup>Optional</sup> <a name="lead_time_week_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeekInput"></a>

```python
lead_time_week_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months_input`<sup>Optional</sup> <a name="months_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.monthsInput"></a>

```python
months_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `patching_mode_input`<sup>Optional</sup> <a name="patching_mode_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```python
patching_mode_input: str
```

- *Type:* str

---

##### `preference_input`<sup>Optional</sup> <a name="preference_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preferenceInput"></a>

```python
preference_input: str
```

- *Type:* str

---

##### `weeks_of_month_input`<sup>Optional</sup> <a name="weeks_of_month_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```python
weeks_of_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `custom_action_timeout_mins`<sup>Required</sup> <a name="custom_action_timeout_mins" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins"></a>

```python
custom_action_timeout_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lead_time_week`<sup>Required</sup> <a name="lead_time_week" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek"></a>

```python
lead_time_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---


### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts">put_customer_contacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetComputeCount">reset_compute_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetCustomerContacts">reset_customer_contacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetStorageCount">reset_storage_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetTotalStorageSizeGb">reset_total_storage_size_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_contacts` <a name="put_customer_contacts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts"></a>

```python
def put_customer_contacts(
  value: typing.Union[IResolvable, typing.List[GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  custom_action_timeout_mins: typing.Union[int, float] = None,
  days_of_week: typing.List[str] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  is_custom_action_timeout_enabled: typing.Union[bool, IResolvable] = None,
  lead_time_week: typing.Union[int, float] = None,
  months: typing.List[str] = None,
  patching_mode: str = None,
  preference: str = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `custom_action_timeout_mins`<sup>Optional</sup> <a name="custom_action_timeout_mins" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.customActionTimeoutMins"></a>

- *Type:* typing.Union[int, float]

Determines the amount of time the system will wait before the start of each database server patching operation.

Custom action timeout is in minutes and
valid value is between 15 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#custom_action_timeout_mins GoogleOracleDatabaseCloudExadataInfrastructure#custom_action_timeout_mins}

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.daysOfWeek"></a>

- *Type:* typing.List[str]

Days during the week when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#days_of_week GoogleOracleDatabaseCloudExadataInfrastructure#days_of_week}

---

###### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.hoursOfDay"></a>

- *Type:* typing.List[typing.Union[int, float]]

The window of hours during the day when maintenance should be performed.

The window is a 4 hour slot. Valid values are:
0 - represents time slot 0:00 - 3:59 UTC
4 - represents time slot 4:00 - 7:59 UTC
8 - represents time slot 8:00 - 11:59 UTC
12 - represents time slot 12:00 - 15:59 UTC
16 - represents time slot 16:00 - 19:59 UTC
20 - represents time slot 20:00 - 23:59 UTC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#hours_of_day GoogleOracleDatabaseCloudExadataInfrastructure#hours_of_day}

---

###### `is_custom_action_timeout_enabled`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.isCustomActionTimeoutEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#is_custom_action_timeout_enabled GoogleOracleDatabaseCloudExadataInfrastructure#is_custom_action_timeout_enabled}

---

###### `lead_time_week`<sup>Optional</sup> <a name="lead_time_week" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.leadTimeWeek"></a>

- *Type:* typing.Union[int, float]

Lead time window allows user to set a lead time to prepare for a down time.

The lead time is in weeks and valid value is between 1 to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#lead_time_week GoogleOracleDatabaseCloudExadataInfrastructure#lead_time_week}

---

###### `months`<sup>Optional</sup> <a name="months" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.months"></a>

- *Type:* typing.List[str]

Months during the year when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#months GoogleOracleDatabaseCloudExadataInfrastructure#months}

---

###### `patching_mode`<sup>Optional</sup> <a name="patching_mode" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.patchingMode"></a>

- *Type:* str

Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#patching_mode GoogleOracleDatabaseCloudExadataInfrastructure#patching_mode}

---

###### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.preference"></a>

- *Type:* str

The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#preference GoogleOracleDatabaseCloudExadataInfrastructure#preference}

---

###### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.weeksOfMonth"></a>

- *Type:* typing.List[typing.Union[int, float]]

Weeks during the month when maintenance should be performed.

Weeks start on
the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7
days. Weeks start and end based on calendar dates, not days of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#weeks_of_month GoogleOracleDatabaseCloudExadataInfrastructure#weeks_of_month}

---

##### `reset_compute_count` <a name="reset_compute_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetComputeCount"></a>

```python
def reset_compute_count() -> None
```

##### `reset_customer_contacts` <a name="reset_customer_contacts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetCustomerContacts"></a>

```python
def reset_customer_contacts() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_storage_count` <a name="reset_storage_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetStorageCount"></a>

```python
def reset_storage_count() -> None
```

##### `reset_total_storage_size_gb` <a name="reset_total_storage_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetTotalStorageSizeGb"></a>

```python
def reset_total_storage_size_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount">activated_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount">additional_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb">available_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts">customer_contacts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb">data_storage_size_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb">db_node_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion">db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount">max_cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb">max_data_storage_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb">max_db_node_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb">max_memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb">memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion">monthly_db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion">monthly_storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId">next_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime">next_maintenance_run_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime">next_security_maintenance_run_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion">storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCountInput">compute_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContactsInput">customer_contacts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCountInput">storage_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGbInput">total_storage_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb">total_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activated_storage_count`<sup>Required</sup> <a name="activated_storage_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount"></a>

```python
activated_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_storage_count`<sup>Required</sup> <a name="additional_storage_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount"></a>

```python
additional_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_storage_size_gb`<sup>Required</sup> <a name="available_storage_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb"></a>

```python
available_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts"></a>

```python
customer_contacts: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a>

---

##### `data_storage_size_tb`<sup>Required</sup> <a name="data_storage_size_tb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb"></a>

```python
data_storage_size_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_gb`<sup>Required</sup> <a name="db_node_storage_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```python
db_node_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_version`<sup>Required</sup> <a name="db_server_version" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion"></a>

```python
db_server_version: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference</a>

---

##### `max_cpu_count`<sup>Required</sup> <a name="max_cpu_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount"></a>

```python
max_cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_data_storage_tb`<sup>Required</sup> <a name="max_data_storage_tb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb"></a>

```python
max_data_storage_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_db_node_storage_size_gb`<sup>Required</sup> <a name="max_db_node_storage_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb"></a>

```python
max_db_node_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_gb`<sup>Required</sup> <a name="max_memory_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb"></a>

```python
max_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_gb`<sup>Required</sup> <a name="memory_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb"></a>

```python
memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monthly_db_server_version`<sup>Required</sup> <a name="monthly_db_server_version" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion"></a>

```python
monthly_db_server_version: str
```

- *Type:* str

---

##### `monthly_storage_server_version`<sup>Required</sup> <a name="monthly_storage_server_version" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion"></a>

```python
monthly_storage_server_version: str
```

- *Type:* str

---

##### `next_maintenance_run_id`<sup>Required</sup> <a name="next_maintenance_run_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId"></a>

```python
next_maintenance_run_id: str
```

- *Type:* str

---

##### `next_maintenance_run_time`<sup>Required</sup> <a name="next_maintenance_run_time" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime"></a>

```python
next_maintenance_run_time: str
```

- *Type:* str

---

##### `next_security_maintenance_run_time`<sup>Required</sup> <a name="next_security_maintenance_run_time" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime"></a>

```python
next_security_maintenance_run_time: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_server_version`<sup>Required</sup> <a name="storage_server_version" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion"></a>

```python
storage_server_version: str
```

- *Type:* str

---

##### `compute_count_input`<sup>Optional</sup> <a name="compute_count_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCountInput"></a>

```python
compute_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts_input`<sup>Optional</sup> <a name="customer_contacts_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContactsInput"></a>

```python
customer_contacts_input: typing.Union[IResolvable, typing.List[GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `storage_count_input`<sup>Optional</sup> <a name="storage_count_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCountInput"></a>

```python
storage_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_storage_size_gb_input`<sup>Optional</sup> <a name="total_storage_size_gb_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGbInput"></a>

```python
total_storage_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `storage_count`<sup>Required</sup> <a name="storage_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount"></a>

```python
storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_storage_size_gb`<sup>Required</sup> <a name="total_storage_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb"></a>

```python
total_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseCloudExadataInfrastructureProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

---


### GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_exadata_infrastructure

googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleOracleDatabaseCloudExadataInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a>]

---



