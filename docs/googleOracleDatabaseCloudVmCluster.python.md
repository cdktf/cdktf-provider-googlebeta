# `googleOracleDatabaseCloudVmCluster` Submodule <a name="`googleOracleDatabaseCloudVmCluster` Submodule" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseCloudVmCluster <a name="GoogleOracleDatabaseCloudVmCluster" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster google_oracle_database_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_subnet_cidr: str,
  cidr: str,
  cloud_vm_cluster_id: str,
  exadata_infrastructure: str,
  location: str,
  network: str,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  properties: GoogleOracleDatabaseCloudVmClusterProperties = None,
  timeouts: GoogleOracleDatabaseCloudVmClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | CIDR range of the backup subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.cidr">cidr</a></code> | <code>str</code> | Network settings. CIDR to use for cluster IP allocation. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | The ID of the VM Cluster to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.exadataInfrastructure">exadata_infrastructure</a></code> | <code>str</code> | The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.network">network</a></code> | <code>str</code> | The name of the VPC network. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#id GoogleOracleDatabaseCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels or tags associated with the VM Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#project GoogleOracleDatabaseCloudVmCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_subnet_cidr`<sup>Required</sup> <a name="backup_subnet_cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.backupSubnetCidr"></a>

- *Type:* str

CIDR range of the backup subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#backup_subnet_cidr GoogleOracleDatabaseCloudVmCluster#backup_subnet_cidr}

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.cidr"></a>

- *Type:* str

Network settings. CIDR to use for cluster IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#cidr GoogleOracleDatabaseCloudVmCluster#cidr}

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.cloudVmClusterId"></a>

- *Type:* str

The ID of the VM Cluster to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#cloud_vm_cluster_id GoogleOracleDatabaseCloudVmCluster#cloud_vm_cluster_id}

---

##### `exadata_infrastructure`<sup>Required</sup> <a name="exadata_infrastructure" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.exadataInfrastructure"></a>

- *Type:* str

The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#exadata_infrastructure GoogleOracleDatabaseCloudVmCluster#exadata_infrastructure}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#location GoogleOracleDatabaseCloudVmCluster#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.network"></a>

- *Type:* str

The name of the VPC network. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#network GoogleOracleDatabaseCloudVmCluster#network}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the cluster.

Deleting this cluster via terraform destroy or terraform apply will only succeed if this field is false in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#deletion_protection GoogleOracleDatabaseCloudVmCluster#deletion_protection}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.displayName"></a>

- *Type:* str

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#display_name GoogleOracleDatabaseCloudVmCluster#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#id GoogleOracleDatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels or tags associated with the VM Cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#labels GoogleOracleDatabaseCloudVmCluster#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#project GoogleOracleDatabaseCloudVmCluster#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#properties GoogleOracleDatabaseCloudVmCluster#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#timeouts GoogleOracleDatabaseCloudVmCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties"></a>

```python
def put_properties(
  cpu_core_count: typing.Union[int, float],
  license_type: str,
  cluster_name: str = None,
  data_storage_size_tb: typing.Union[int, float] = None,
  db_node_storage_size_gb: typing.Union[int, float] = None,
  db_server_ocids: typing.List[str] = None,
  diagnostics_data_collection_options: GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions = None,
  disk_redundancy: str = None,
  gi_version: str = None,
  hostname_prefix: str = None,
  local_backup_enabled: typing.Union[bool, IResolvable] = None,
  memory_size_gb: typing.Union[int, float] = None,
  node_count: typing.Union[int, float] = None,
  ocpu_count: typing.Union[int, float] = None,
  sparse_diskgroup_enabled: typing.Union[bool, IResolvable] = None,
  ssh_public_keys: typing.List[str] = None,
  time_zone: GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone = None
) -> None
```

###### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

Number of enabled CPU cores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#cpu_core_count GoogleOracleDatabaseCloudVmCluster#cpu_core_count}

---

###### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.licenseType"></a>

- *Type:* str

License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#license_type GoogleOracleDatabaseCloudVmCluster#license_type}

---

###### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.clusterName"></a>

- *Type:* str

OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#cluster_name GoogleOracleDatabaseCloudVmCluster#cluster_name}

---

###### `data_storage_size_tb`<sup>Optional</sup> <a name="data_storage_size_tb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.dataStorageSizeTb"></a>

- *Type:* typing.Union[int, float]

The data disk group size to be allocated in TBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#data_storage_size_tb GoogleOracleDatabaseCloudVmCluster#data_storage_size_tb}

---

###### `db_node_storage_size_gb`<sup>Optional</sup> <a name="db_node_storage_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.dbNodeStorageSizeGb"></a>

- *Type:* typing.Union[int, float]

Local storage per VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#db_node_storage_size_gb GoogleOracleDatabaseCloudVmCluster#db_node_storage_size_gb}

---

###### `db_server_ocids`<sup>Optional</sup> <a name="db_server_ocids" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.dbServerOcids"></a>

- *Type:* typing.List[str]

OCID of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#db_server_ocids GoogleOracleDatabaseCloudVmCluster#db_server_ocids}

---

###### `diagnostics_data_collection_options`<sup>Optional</sup> <a name="diagnostics_data_collection_options" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.diagnosticsDataCollectionOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

diagnostics_data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#diagnostics_data_collection_options GoogleOracleDatabaseCloudVmCluster#diagnostics_data_collection_options}

---

###### `disk_redundancy`<sup>Optional</sup> <a name="disk_redundancy" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.diskRedundancy"></a>

- *Type:* str

The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#disk_redundancy GoogleOracleDatabaseCloudVmCluster#disk_redundancy}

---

###### `gi_version`<sup>Optional</sup> <a name="gi_version" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.giVersion"></a>

- *Type:* str

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#gi_version GoogleOracleDatabaseCloudVmCluster#gi_version}

---

###### `hostname_prefix`<sup>Optional</sup> <a name="hostname_prefix" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.hostnamePrefix"></a>

- *Type:* str

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#hostname_prefix GoogleOracleDatabaseCloudVmCluster#hostname_prefix}

---

###### `local_backup_enabled`<sup>Optional</sup> <a name="local_backup_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.localBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use local backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#local_backup_enabled GoogleOracleDatabaseCloudVmCluster#local_backup_enabled}

---

###### `memory_size_gb`<sup>Optional</sup> <a name="memory_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.memorySizeGb"></a>

- *Type:* typing.Union[int, float]

Memory allocated in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#memory_size_gb GoogleOracleDatabaseCloudVmCluster#memory_size_gb}

---

###### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Number of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#node_count GoogleOracleDatabaseCloudVmCluster#node_count}

---

###### `ocpu_count`<sup>Optional</sup> <a name="ocpu_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.ocpuCount"></a>

- *Type:* typing.Union[int, float]

OCPU count per VM. Minimum is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#ocpu_count GoogleOracleDatabaseCloudVmCluster#ocpu_count}

---

###### `sparse_diskgroup_enabled`<sup>Optional</sup> <a name="sparse_diskgroup_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.sparseDiskgroupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use exadata sparse snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#sparse_diskgroup_enabled GoogleOracleDatabaseCloudVmCluster#sparse_diskgroup_enabled}

---

###### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.sshPublicKeys"></a>

- *Type:* typing.List[str]

SSH public keys to be stored with cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#ssh_public_keys GoogleOracleDatabaseCloudVmCluster#ssh_public_keys}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.timeZone"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#time_zone GoogleOracleDatabaseCloudVmCluster#time_zone}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#create GoogleOracleDatabaseCloudVmCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#delete GoogleOracleDatabaseCloudVmCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#update GoogleOracleDatabaseCloudVmCluster#update}.

---

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleOracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleOracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleOracleDatabaseCloudVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleOracleDatabaseCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference">GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidrInput">backup_subnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput">cloud_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructureInput">exadata_infrastructure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructure">exadata_infrastructure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gcp_oracle_zone`<sup>Required</sup> <a name="gcp_oracle_zone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.properties"></a>

```python
properties: GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.timeouts"></a>

```python
timeouts: GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference">GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference</a>

---

##### `backup_subnet_cidr_input`<sup>Optional</sup> <a name="backup_subnet_cidr_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidrInput"></a>

```python
backup_subnet_cidr_input: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cloud_vm_cluster_id_input`<sup>Optional</sup> <a name="cloud_vm_cluster_id_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput"></a>

```python
cloud_vm_cluster_id_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `exadata_infrastructure_input`<sup>Optional</sup> <a name="exadata_infrastructure_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructureInput"></a>

```python
exadata_infrastructure_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.propertiesInput"></a>

```python
properties_input: GoogleOracleDatabaseCloudVmClusterProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleOracleDatabaseCloudVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a>]

---

##### `backup_subnet_cidr`<sup>Required</sup> <a name="backup_subnet_cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidr"></a>

```python
backup_subnet_cidr: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadata_infrastructure`<sup>Required</sup> <a name="exadata_infrastructure" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructure"></a>

```python
exadata_infrastructure: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseCloudVmClusterConfig <a name="GoogleOracleDatabaseCloudVmClusterConfig" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_subnet_cidr: str,
  cidr: str,
  cloud_vm_cluster_id: str,
  exadata_infrastructure: str,
  location: str,
  network: str,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  properties: GoogleOracleDatabaseCloudVmClusterProperties = None,
  timeouts: GoogleOracleDatabaseCloudVmClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | CIDR range of the backup subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.cidr">cidr</a></code> | <code>str</code> | Network settings. CIDR to use for cluster IP allocation. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | The ID of the VM Cluster to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.exadataInfrastructure">exadata_infrastructure</a></code> | <code>str</code> | The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.network">network</a></code> | <code>str</code> | The name of the VPC network. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#id GoogleOracleDatabaseCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels or tags associated with the VM Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#project GoogleOracleDatabaseCloudVmCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_subnet_cidr`<sup>Required</sup> <a name="backup_subnet_cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.backupSubnetCidr"></a>

```python
backup_subnet_cidr: str
```

- *Type:* str

CIDR range of the backup subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#backup_subnet_cidr GoogleOracleDatabaseCloudVmCluster#backup_subnet_cidr}

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Network settings. CIDR to use for cluster IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#cidr GoogleOracleDatabaseCloudVmCluster#cidr}

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

The ID of the VM Cluster to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#cloud_vm_cluster_id GoogleOracleDatabaseCloudVmCluster#cloud_vm_cluster_id}

---

##### `exadata_infrastructure`<sup>Required</sup> <a name="exadata_infrastructure" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.exadataInfrastructure"></a>

```python
exadata_infrastructure: str
```

- *Type:* str

The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#exadata_infrastructure GoogleOracleDatabaseCloudVmCluster#exadata_infrastructure}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#location GoogleOracleDatabaseCloudVmCluster#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the VPC network. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#network GoogleOracleDatabaseCloudVmCluster#network}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the cluster.

Deleting this cluster via terraform destroy or terraform apply will only succeed if this field is false in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#deletion_protection GoogleOracleDatabaseCloudVmCluster#deletion_protection}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#display_name GoogleOracleDatabaseCloudVmCluster#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#id GoogleOracleDatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels or tags associated with the VM Cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#labels GoogleOracleDatabaseCloudVmCluster#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#project GoogleOracleDatabaseCloudVmCluster#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.properties"></a>

```python
properties: GoogleOracleDatabaseCloudVmClusterProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#properties GoogleOracleDatabaseCloudVmCluster#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.timeouts"></a>

```python
timeouts: GoogleOracleDatabaseCloudVmClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#timeouts GoogleOracleDatabaseCloudVmCluster#timeouts}

---

### GoogleOracleDatabaseCloudVmClusterProperties <a name="GoogleOracleDatabaseCloudVmClusterProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties(
  cpu_core_count: typing.Union[int, float],
  license_type: str,
  cluster_name: str = None,
  data_storage_size_tb: typing.Union[int, float] = None,
  db_node_storage_size_gb: typing.Union[int, float] = None,
  db_server_ocids: typing.List[str] = None,
  diagnostics_data_collection_options: GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions = None,
  disk_redundancy: str = None,
  gi_version: str = None,
  hostname_prefix: str = None,
  local_backup_enabled: typing.Union[bool, IResolvable] = None,
  memory_size_gb: typing.Union[int, float] = None,
  node_count: typing.Union[int, float] = None,
  ocpu_count: typing.Union[int, float] = None,
  sparse_diskgroup_enabled: typing.Union[bool, IResolvable] = None,
  ssh_public_keys: typing.List[str] = None,
  time_zone: GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Number of enabled CPU cores. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.licenseType">license_type</a></code> | <code>str</code> | License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.clusterName">cluster_name</a></code> | <code>str</code> | OCI Cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dataStorageSizeTb">data_storage_size_tb</a></code> | <code>typing.Union[int, float]</code> | The data disk group size to be allocated in TBs. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dbNodeStorageSizeGb">db_node_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | Local storage per VM. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dbServerOcids">db_server_ocids</a></code> | <code>typing.List[str]</code> | OCID of database servers. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.diagnosticsDataCollectionOptions">diagnostics_data_collection_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | diagnostics_data_collection_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.giVersion">gi_version</a></code> | <code>str</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.localBackupEnabled">local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use local backup. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.memorySizeGb">memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | Memory allocated in GBs. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Number of database servers. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | OCPU count per VM. Minimum is 0.1. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.sparseDiskgroupEnabled">sparse_diskgroup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use exadata sparse snapshots. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | SSH public keys to be stored with cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.timeZone">time_zone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of enabled CPU cores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#cpu_core_count GoogleOracleDatabaseCloudVmCluster#cpu_core_count}

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#license_type GoogleOracleDatabaseCloudVmCluster#license_type}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#cluster_name GoogleOracleDatabaseCloudVmCluster#cluster_name}

---

##### `data_storage_size_tb`<sup>Optional</sup> <a name="data_storage_size_tb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dataStorageSizeTb"></a>

```python
data_storage_size_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data disk group size to be allocated in TBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#data_storage_size_tb GoogleOracleDatabaseCloudVmCluster#data_storage_size_tb}

---

##### `db_node_storage_size_gb`<sup>Optional</sup> <a name="db_node_storage_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dbNodeStorageSizeGb"></a>

```python
db_node_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Local storage per VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#db_node_storage_size_gb GoogleOracleDatabaseCloudVmCluster#db_node_storage_size_gb}

---

##### `db_server_ocids`<sup>Optional</sup> <a name="db_server_ocids" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dbServerOcids"></a>

```python
db_server_ocids: typing.List[str]
```

- *Type:* typing.List[str]

OCID of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#db_server_ocids GoogleOracleDatabaseCloudVmCluster#db_server_ocids}

---

##### `diagnostics_data_collection_options`<sup>Optional</sup> <a name="diagnostics_data_collection_options" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.diagnosticsDataCollectionOptions"></a>

```python
diagnostics_data_collection_options: GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

diagnostics_data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#diagnostics_data_collection_options GoogleOracleDatabaseCloudVmCluster#diagnostics_data_collection_options}

---

##### `disk_redundancy`<sup>Optional</sup> <a name="disk_redundancy" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#disk_redundancy GoogleOracleDatabaseCloudVmCluster#disk_redundancy}

---

##### `gi_version`<sup>Optional</sup> <a name="gi_version" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#gi_version GoogleOracleDatabaseCloudVmCluster#gi_version}

---

##### `hostname_prefix`<sup>Optional</sup> <a name="hostname_prefix" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#hostname_prefix GoogleOracleDatabaseCloudVmCluster#hostname_prefix}

---

##### `local_backup_enabled`<sup>Optional</sup> <a name="local_backup_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.localBackupEnabled"></a>

```python
local_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use local backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#local_backup_enabled GoogleOracleDatabaseCloudVmCluster#local_backup_enabled}

---

##### `memory_size_gb`<sup>Optional</sup> <a name="memory_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.memorySizeGb"></a>

```python
memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Memory allocated in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#memory_size_gb GoogleOracleDatabaseCloudVmCluster#memory_size_gb}

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#node_count GoogleOracleDatabaseCloudVmCluster#node_count}

---

##### `ocpu_count`<sup>Optional</sup> <a name="ocpu_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

OCPU count per VM. Minimum is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#ocpu_count GoogleOracleDatabaseCloudVmCluster#ocpu_count}

---

##### `sparse_diskgroup_enabled`<sup>Optional</sup> <a name="sparse_diskgroup_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.sparseDiskgroupEnabled"></a>

```python
sparse_diskgroup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use exadata sparse snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#sparse_diskgroup_enabled GoogleOracleDatabaseCloudVmCluster#sparse_diskgroup_enabled}

---

##### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

SSH public keys to be stored with cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#ssh_public_keys GoogleOracleDatabaseCloudVmCluster#ssh_public_keys}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.timeZone"></a>

```python
time_zone: GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#time_zone GoogleOracleDatabaseCloudVmCluster#time_zone}

---

### GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions <a name="GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions(
  diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  incident_logs_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.diagnosticsEventsEnabled">diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether diagnostic collection is enabled for the VM cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.healthMonitoringEnabled">health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether health monitoring is enabled for the VM cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.incidentLogsEnabled">incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether incident logs and trace collection are enabled for the VM cluster. |

---

##### `diagnostics_events_enabled`<sup>Optional</sup> <a name="diagnostics_events_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.diagnosticsEventsEnabled"></a>

```python
diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#diagnostics_events_enabled GoogleOracleDatabaseCloudVmCluster#diagnostics_events_enabled}

---

##### `health_monitoring_enabled`<sup>Optional</sup> <a name="health_monitoring_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.healthMonitoringEnabled"></a>

```python
health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#health_monitoring_enabled GoogleOracleDatabaseCloudVmCluster#health_monitoring_enabled}

---

##### `incident_logs_enabled`<sup>Optional</sup> <a name="incident_logs_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.incidentLogsEnabled"></a>

```python
incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether incident logs and trace collection are enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#incident_logs_enabled GoogleOracleDatabaseCloudVmCluster#incident_logs_enabled}

---

### GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone <a name="GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone.property.id">id</a></code> | <code>str</code> | IANA Time Zone Database time zone, e.g. "America/New_York". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone.property.id"></a>

```python
id: str
```

- *Type:* str

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#id GoogleOracleDatabaseCloudVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GoogleOracleDatabaseCloudVmClusterTimeouts <a name="GoogleOracleDatabaseCloudVmClusterTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#create GoogleOracleDatabaseCloudVmCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#delete GoogleOracleDatabaseCloudVmCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#update GoogleOracleDatabaseCloudVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#create GoogleOracleDatabaseCloudVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#delete GoogleOracleDatabaseCloudVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#update GoogleOracleDatabaseCloudVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference <a name="GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled">reset_diagnostics_events_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled">reset_health_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetIncidentLogsEnabled">reset_incident_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_diagnostics_events_enabled` <a name="reset_diagnostics_events_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled"></a>

```python
def reset_diagnostics_events_enabled() -> None
```

##### `reset_health_monitoring_enabled` <a name="reset_health_monitoring_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled"></a>

```python
def reset_health_monitoring_enabled() -> None
```

##### `reset_incident_logs_enabled` <a name="reset_incident_logs_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetIncidentLogsEnabled"></a>

```python
def reset_incident_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput">diagnostics_events_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput">health_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput">incident_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled">incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `diagnostics_events_enabled_input`<sup>Optional</sup> <a name="diagnostics_events_enabled_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput"></a>

```python
diagnostics_events_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_monitoring_enabled_input`<sup>Optional</sup> <a name="health_monitoring_enabled_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput"></a>

```python
health_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `incident_logs_enabled_input`<sup>Optional</sup> <a name="incident_logs_enabled_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput"></a>

```python
incident_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `diagnostics_events_enabled`<sup>Required</sup> <a name="diagnostics_events_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```python
diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_monitoring_enabled`<sup>Required</sup> <a name="health_monitoring_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```python
health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `incident_logs_enabled`<sup>Required</sup> <a name="incident_logs_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```python
incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---


### GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference <a name="GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions">put_diagnostics_data_collection_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone">put_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDataStorageSizeTb">reset_data_storage_size_tb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbNodeStorageSizeGb">reset_db_node_storage_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbServerOcids">reset_db_server_ocids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiagnosticsDataCollectionOptions">reset_diagnostics_data_collection_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiskRedundancy">reset_disk_redundancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetGiVersion">reset_gi_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetHostnamePrefix">reset_hostname_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetLocalBackupEnabled">reset_local_backup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetMemorySizeGb">reset_memory_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetOcpuCount">reset_ocpu_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetSparseDiskgroupEnabled">reset_sparse_diskgroup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetSshPublicKeys">reset_ssh_public_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_diagnostics_data_collection_options` <a name="put_diagnostics_data_collection_options" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions"></a>

```python
def put_diagnostics_data_collection_options(
  diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  incident_logs_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `diagnostics_events_enabled`<sup>Optional</sup> <a name="diagnostics_events_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions.parameter.diagnosticsEventsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#diagnostics_events_enabled GoogleOracleDatabaseCloudVmCluster#diagnostics_events_enabled}

---

###### `health_monitoring_enabled`<sup>Optional</sup> <a name="health_monitoring_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions.parameter.healthMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#health_monitoring_enabled GoogleOracleDatabaseCloudVmCluster#health_monitoring_enabled}

---

###### `incident_logs_enabled`<sup>Optional</sup> <a name="incident_logs_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions.parameter.incidentLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether incident logs and trace collection are enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#incident_logs_enabled GoogleOracleDatabaseCloudVmCluster#incident_logs_enabled}

---

##### `put_time_zone` <a name="put_time_zone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone"></a>

```python
def put_time_zone(
  id: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone.parameter.id"></a>

- *Type:* str

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_oracle_database_cloud_vm_cluster#id GoogleOracleDatabaseCloudVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_data_storage_size_tb` <a name="reset_data_storage_size_tb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDataStorageSizeTb"></a>

```python
def reset_data_storage_size_tb() -> None
```

##### `reset_db_node_storage_size_gb` <a name="reset_db_node_storage_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbNodeStorageSizeGb"></a>

```python
def reset_db_node_storage_size_gb() -> None
```

##### `reset_db_server_ocids` <a name="reset_db_server_ocids" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbServerOcids"></a>

```python
def reset_db_server_ocids() -> None
```

##### `reset_diagnostics_data_collection_options` <a name="reset_diagnostics_data_collection_options" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiagnosticsDataCollectionOptions"></a>

```python
def reset_diagnostics_data_collection_options() -> None
```

##### `reset_disk_redundancy` <a name="reset_disk_redundancy" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiskRedundancy"></a>

```python
def reset_disk_redundancy() -> None
```

##### `reset_gi_version` <a name="reset_gi_version" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetGiVersion"></a>

```python
def reset_gi_version() -> None
```

##### `reset_hostname_prefix` <a name="reset_hostname_prefix" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetHostnamePrefix"></a>

```python
def reset_hostname_prefix() -> None
```

##### `reset_local_backup_enabled` <a name="reset_local_backup_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetLocalBackupEnabled"></a>

```python
def reset_local_backup_enabled() -> None
```

##### `reset_memory_size_gb` <a name="reset_memory_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetMemorySizeGb"></a>

```python
def reset_memory_size_gb() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_ocpu_count` <a name="reset_ocpu_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetOcpuCount"></a>

```python
def reset_ocpu_count() -> None
```

##### `reset_sparse_diskgroup_enabled` <a name="reset_sparse_diskgroup_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetSparseDiskgroupEnabled"></a>

```python
def reset_sparse_diskgroup_enabled() -> None
```

##### `reset_ssh_public_keys` <a name="reset_ssh_public_keys" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetSshPublicKeys"></a>

```python
def reset_ssh_public_keys() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions">diagnostics_data_collection_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp">dns_listener_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns">scan_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId">scan_dns_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds">scan_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb">storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion">system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone">time_zone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTbInput">data_storage_size_tb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGbInput">db_node_storage_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcidsInput">db_server_ocids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptionsInput">diagnostics_data_collection_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancyInput">disk_redundancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersionInput">gi_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefixInput">hostname_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabledInput">local_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGbInput">memory_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCountInput">ocpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabledInput">sparse_diskgroup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb">data_storage_size_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb">db_node_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids">db_server_ocids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled">local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb">memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled">sparse_diskgroup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `diagnostics_data_collection_options`<sup>Required</sup> <a name="diagnostics_data_collection_options" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions"></a>

```python
diagnostics_data_collection_options: GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference</a>

---

##### `dns_listener_ip`<sup>Required</sup> <a name="dns_listener_ip" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp"></a>

```python
dns_listener_ip: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `scan_dns`<sup>Required</sup> <a name="scan_dns" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns"></a>

```python
scan_dns: str
```

- *Type:* str

---

##### `scan_dns_record_id`<sup>Required</sup> <a name="scan_dns_record_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId"></a>

```python
scan_dns_record_id: str
```

- *Type:* str

---

##### `scan_ip_ids`<sup>Required</sup> <a name="scan_ip_ids" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds"></a>

```python
scan_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl`<sup>Required</sup> <a name="scan_listener_port_tcp_ssl" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_size_gb`<sup>Required</sup> <a name="storage_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb"></a>

```python
storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `system_version`<sup>Required</sup> <a name="system_version" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone"></a>

```python
time_zone: GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_tb_input`<sup>Optional</sup> <a name="data_storage_size_tb_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTbInput"></a>

```python
data_storage_size_tb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_gb_input`<sup>Optional</sup> <a name="db_node_storage_size_gb_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGbInput"></a>

```python
db_node_storage_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_ocids_input`<sup>Optional</sup> <a name="db_server_ocids_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcidsInput"></a>

```python
db_server_ocids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `diagnostics_data_collection_options_input`<sup>Optional</sup> <a name="diagnostics_data_collection_options_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptionsInput"></a>

```python
diagnostics_data_collection_options_input: GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---

##### `disk_redundancy_input`<sup>Optional</sup> <a name="disk_redundancy_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancyInput"></a>

```python
disk_redundancy_input: str
```

- *Type:* str

---

##### `gi_version_input`<sup>Optional</sup> <a name="gi_version_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersionInput"></a>

```python
gi_version_input: str
```

- *Type:* str

---

##### `hostname_prefix_input`<sup>Optional</sup> <a name="hostname_prefix_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```python
hostname_prefix_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `local_backup_enabled_input`<sup>Optional</sup> <a name="local_backup_enabled_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabledInput"></a>

```python
local_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_size_gb_input`<sup>Optional</sup> <a name="memory_size_gb_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGbInput"></a>

```python
memory_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_count_input`<sup>Optional</sup> <a name="ocpu_count_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCountInput"></a>

```python
ocpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sparse_diskgroup_enabled_input`<sup>Optional</sup> <a name="sparse_diskgroup_enabled_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabledInput"></a>

```python
sparse_diskgroup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_tb`<sup>Required</sup> <a name="data_storage_size_tb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb"></a>

```python
data_storage_size_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_gb`<sup>Required</sup> <a name="db_node_storage_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```python
db_node_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_ocids`<sup>Required</sup> <a name="db_server_ocids" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids"></a>

```python
db_server_ocids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disk_redundancy`<sup>Required</sup> <a name="disk_redundancy" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `hostname_prefix`<sup>Required</sup> <a name="hostname_prefix" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `local_backup_enabled`<sup>Required</sup> <a name="local_backup_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled"></a>

```python
local_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_size_gb`<sup>Required</sup> <a name="memory_size_gb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```python
memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sparse_diskgroup_enabled`<sup>Required</sup> <a name="sparse_diskgroup_enabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled"></a>

```python
sparse_diskgroup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseCloudVmClusterProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a>

---


### GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```python
internal_value: GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---


### GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference <a name="GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_oracle_database_cloud_vm_cluster

googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleOracleDatabaseCloudVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a>]

---



