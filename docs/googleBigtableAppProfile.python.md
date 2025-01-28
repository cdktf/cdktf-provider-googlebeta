# `googleBigtableAppProfile` Submodule <a name="`googleBigtableAppProfile` Submodule" id="@cdktf/provider-google-beta.googleBigtableAppProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableAppProfile <a name="GoogleBigtableAppProfile" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile google_bigtable_app_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_profile_id: str,
  data_boost_isolation_read_only: GoogleBigtableAppProfileDataBoostIsolationReadOnly = None,
  description: str = None,
  id: str = None,
  ignore_warnings: typing.Union[bool, IResolvable] = None,
  instance: str = None,
  multi_cluster_routing_cluster_ids: typing.List[str] = None,
  multi_cluster_routing_use_any: typing.Union[bool, IResolvable] = None,
  project: str = None,
  row_affinity: typing.Union[bool, IResolvable] = None,
  single_cluster_routing: GoogleBigtableAppProfileSingleClusterRouting = None,
  standard_isolation: GoogleBigtableAppProfileStandardIsolation = None,
  timeouts: GoogleBigtableAppProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.appProfileId">app_profile_id</a></code> | <code>str</code> | The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.dataBoostIsolationReadOnly">data_boost_isolation_read_only</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a></code> | data_boost_isolation_read_only block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Long form description of the use case for this app profile. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#id GoogleBigtableAppProfile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.ignoreWarnings">ignore_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, ignore safety checks when deleting/updating the app profile. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The name of the instance to create the app profile within. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.multiClusterRoutingClusterIds">multi_cluster_routing_cluster_ids</a></code> | <code>typing.List[str]</code> | The set of clusters to route to. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.multiClusterRoutingUseAny">multi_cluster_routing_use_any</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#project GoogleBigtableAppProfile#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.rowAffinity">row_affinity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Must be used with multi-cluster routing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.singleClusterRouting">single_cluster_routing</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a></code> | single_cluster_routing block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.standardIsolation">standard_isolation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a></code> | standard_isolation block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts">GoogleBigtableAppProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_profile_id`<sup>Required</sup> <a name="app_profile_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.appProfileId"></a>

- *Type:* str

The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#app_profile_id GoogleBigtableAppProfile#app_profile_id}

---

##### `data_boost_isolation_read_only`<sup>Optional</sup> <a name="data_boost_isolation_read_only" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.dataBoostIsolationReadOnly"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a>

data_boost_isolation_read_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#data_boost_isolation_read_only GoogleBigtableAppProfile#data_boost_isolation_read_only}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.description"></a>

- *Type:* str

Long form description of the use case for this app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#description GoogleBigtableAppProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#id GoogleBigtableAppProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_warnings`<sup>Optional</sup> <a name="ignore_warnings" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.ignoreWarnings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, ignore safety checks when deleting/updating the app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#ignore_warnings GoogleBigtableAppProfile#ignore_warnings}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.instance"></a>

- *Type:* str

The name of the instance to create the app profile within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#instance GoogleBigtableAppProfile#instance}

---

##### `multi_cluster_routing_cluster_ids`<sup>Optional</sup> <a name="multi_cluster_routing_cluster_ids" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.multiClusterRoutingClusterIds"></a>

- *Type:* typing.List[str]

The set of clusters to route to.

The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#multi_cluster_routing_cluster_ids GoogleBigtableAppProfile#multi_cluster_routing_cluster_ids}

---

##### `multi_cluster_routing_use_any`<sup>Optional</sup> <a name="multi_cluster_routing_use_any" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.multiClusterRoutingUseAny"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays.

Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#multi_cluster_routing_use_any GoogleBigtableAppProfile#multi_cluster_routing_use_any}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#project GoogleBigtableAppProfile#project}.

---

##### `row_affinity`<sup>Optional</sup> <a name="row_affinity" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.rowAffinity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Must be used with multi-cluster routing.

If true, then this app profile will use row affinity sticky routing. With row affinity, Bigtable will route single row key requests based on the row key, rather than randomly. Instead, each row key will be assigned to a cluster by Cloud Bigtable, and will stick to that cluster. Choosing this option improves read-your-writes consistency for most requests under most circumstances, without sacrificing availability. Consistency is not guaranteed, as requests may still fail over between clusters in the event of errors or latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#row_affinity GoogleBigtableAppProfile#row_affinity}

---

##### `single_cluster_routing`<sup>Optional</sup> <a name="single_cluster_routing" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.singleClusterRouting"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a>

single_cluster_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#single_cluster_routing GoogleBigtableAppProfile#single_cluster_routing}

---

##### `standard_isolation`<sup>Optional</sup> <a name="standard_isolation" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.standardIsolation"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a>

standard_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#standard_isolation GoogleBigtableAppProfile#standard_isolation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts">GoogleBigtableAppProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#timeouts GoogleBigtableAppProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putDataBoostIsolationReadOnly">put_data_boost_isolation_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putSingleClusterRouting">put_single_cluster_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putStandardIsolation">put_standard_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetDataBoostIsolationReadOnly">reset_data_boost_isolation_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetIgnoreWarnings">reset_ignore_warnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetInstance">reset_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetMultiClusterRoutingClusterIds">reset_multi_cluster_routing_cluster_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetMultiClusterRoutingUseAny">reset_multi_cluster_routing_use_any</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetRowAffinity">reset_row_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetSingleClusterRouting">reset_single_cluster_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetStandardIsolation">reset_standard_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_boost_isolation_read_only` <a name="put_data_boost_isolation_read_only" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putDataBoostIsolationReadOnly"></a>

```python
def put_data_boost_isolation_read_only(
  compute_billing_owner: str
) -> None
```

###### `compute_billing_owner`<sup>Required</sup> <a name="compute_billing_owner" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putDataBoostIsolationReadOnly.parameter.computeBillingOwner"></a>

- *Type:* str

The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#compute_billing_owner GoogleBigtableAppProfile#compute_billing_owner}

---

##### `put_single_cluster_routing` <a name="put_single_cluster_routing" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putSingleClusterRouting"></a>

```python
def put_single_cluster_routing(
  cluster_id: str,
  allow_transactional_writes: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putSingleClusterRouting.parameter.clusterId"></a>

- *Type:* str

The cluster to which read/write requests should be routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#cluster_id GoogleBigtableAppProfile#cluster_id}

---

###### `allow_transactional_writes`<sup>Optional</sup> <a name="allow_transactional_writes" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putSingleClusterRouting.parameter.allowTransactionalWrites"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.

It is unsafe to send these requests to the same table/row/column in multiple clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#allow_transactional_writes GoogleBigtableAppProfile#allow_transactional_writes}

---

##### `put_standard_isolation` <a name="put_standard_isolation" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putStandardIsolation"></a>

```python
def put_standard_isolation(
  priority: str
) -> None
```

###### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putStandardIsolation.parameter.priority"></a>

- *Type:* str

The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#priority GoogleBigtableAppProfile#priority}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#create GoogleBigtableAppProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#delete GoogleBigtableAppProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#update GoogleBigtableAppProfile#update}.

---

##### `reset_data_boost_isolation_read_only` <a name="reset_data_boost_isolation_read_only" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetDataBoostIsolationReadOnly"></a>

```python
def reset_data_boost_isolation_read_only() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_warnings` <a name="reset_ignore_warnings" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetIgnoreWarnings"></a>

```python
def reset_ignore_warnings() -> None
```

##### `reset_instance` <a name="reset_instance" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetInstance"></a>

```python
def reset_instance() -> None
```

##### `reset_multi_cluster_routing_cluster_ids` <a name="reset_multi_cluster_routing_cluster_ids" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetMultiClusterRoutingClusterIds"></a>

```python
def reset_multi_cluster_routing_cluster_ids() -> None
```

##### `reset_multi_cluster_routing_use_any` <a name="reset_multi_cluster_routing_use_any" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetMultiClusterRoutingUseAny"></a>

```python
def reset_multi_cluster_routing_use_any() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_row_affinity` <a name="reset_row_affinity" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetRowAffinity"></a>

```python
def reset_row_affinity() -> None
```

##### `reset_single_cluster_routing` <a name="reset_single_cluster_routing" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetSingleClusterRouting"></a>

```python
def reset_single_cluster_routing() -> None
```

##### `reset_standard_isolation` <a name="reset_standard_isolation" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetStandardIsolation"></a>

```python
def reset_standard_isolation() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigtableAppProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigtableAppProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigtableAppProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigtableAppProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigtableAppProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.dataBoostIsolationReadOnly">data_boost_isolation_read_only</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference">GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.singleClusterRouting">single_cluster_routing</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference">GoogleBigtableAppProfileSingleClusterRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.standardIsolation">standard_isolation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference">GoogleBigtableAppProfileStandardIsolationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference">GoogleBigtableAppProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.appProfileIdInput">app_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.dataBoostIsolationReadOnlyInput">data_boost_isolation_read_only_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.ignoreWarningsInput">ignore_warnings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingClusterIdsInput">multi_cluster_routing_cluster_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingUseAnyInput">multi_cluster_routing_use_any_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.rowAffinityInput">row_affinity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.singleClusterRoutingInput">single_cluster_routing_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.standardIsolationInput">standard_isolation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts">GoogleBigtableAppProfileTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.appProfileId">app_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.ignoreWarnings">ignore_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingClusterIds">multi_cluster_routing_cluster_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingUseAny">multi_cluster_routing_use_any</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.rowAffinity">row_affinity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_boost_isolation_read_only`<sup>Required</sup> <a name="data_boost_isolation_read_only" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.dataBoostIsolationReadOnly"></a>

```python
data_boost_isolation_read_only: GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference">GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `single_cluster_routing`<sup>Required</sup> <a name="single_cluster_routing" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.singleClusterRouting"></a>

```python
single_cluster_routing: GoogleBigtableAppProfileSingleClusterRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference">GoogleBigtableAppProfileSingleClusterRoutingOutputReference</a>

---

##### `standard_isolation`<sup>Required</sup> <a name="standard_isolation" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.standardIsolation"></a>

```python
standard_isolation: GoogleBigtableAppProfileStandardIsolationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference">GoogleBigtableAppProfileStandardIsolationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.timeouts"></a>

```python
timeouts: GoogleBigtableAppProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference">GoogleBigtableAppProfileTimeoutsOutputReference</a>

---

##### `app_profile_id_input`<sup>Optional</sup> <a name="app_profile_id_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.appProfileIdInput"></a>

```python
app_profile_id_input: str
```

- *Type:* str

---

##### `data_boost_isolation_read_only_input`<sup>Optional</sup> <a name="data_boost_isolation_read_only_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.dataBoostIsolationReadOnlyInput"></a>

```python
data_boost_isolation_read_only_input: GoogleBigtableAppProfileDataBoostIsolationReadOnly
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_warnings_input`<sup>Optional</sup> <a name="ignore_warnings_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.ignoreWarningsInput"></a>

```python
ignore_warnings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `multi_cluster_routing_cluster_ids_input`<sup>Optional</sup> <a name="multi_cluster_routing_cluster_ids_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingClusterIdsInput"></a>

```python
multi_cluster_routing_cluster_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `multi_cluster_routing_use_any_input`<sup>Optional</sup> <a name="multi_cluster_routing_use_any_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingUseAnyInput"></a>

```python
multi_cluster_routing_use_any_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `row_affinity_input`<sup>Optional</sup> <a name="row_affinity_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.rowAffinityInput"></a>

```python
row_affinity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `single_cluster_routing_input`<sup>Optional</sup> <a name="single_cluster_routing_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.singleClusterRoutingInput"></a>

```python
single_cluster_routing_input: GoogleBigtableAppProfileSingleClusterRouting
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a>

---

##### `standard_isolation_input`<sup>Optional</sup> <a name="standard_isolation_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.standardIsolationInput"></a>

```python
standard_isolation_input: GoogleBigtableAppProfileStandardIsolation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBigtableAppProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts">GoogleBigtableAppProfileTimeouts</a>]

---

##### `app_profile_id`<sup>Required</sup> <a name="app_profile_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.appProfileId"></a>

```python
app_profile_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_warnings`<sup>Required</sup> <a name="ignore_warnings" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.ignoreWarnings"></a>

```python
ignore_warnings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `multi_cluster_routing_cluster_ids`<sup>Required</sup> <a name="multi_cluster_routing_cluster_ids" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingClusterIds"></a>

```python
multi_cluster_routing_cluster_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `multi_cluster_routing_use_any`<sup>Required</sup> <a name="multi_cluster_routing_use_any" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.multiClusterRoutingUseAny"></a>

```python
multi_cluster_routing_use_any: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `row_affinity`<sup>Required</sup> <a name="row_affinity" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.rowAffinity"></a>

```python
row_affinity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableAppProfileConfig <a name="GoogleBigtableAppProfileConfig" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_profile_id: str,
  data_boost_isolation_read_only: GoogleBigtableAppProfileDataBoostIsolationReadOnly = None,
  description: str = None,
  id: str = None,
  ignore_warnings: typing.Union[bool, IResolvable] = None,
  instance: str = None,
  multi_cluster_routing_cluster_ids: typing.List[str] = None,
  multi_cluster_routing_use_any: typing.Union[bool, IResolvable] = None,
  project: str = None,
  row_affinity: typing.Union[bool, IResolvable] = None,
  single_cluster_routing: GoogleBigtableAppProfileSingleClusterRouting = None,
  standard_isolation: GoogleBigtableAppProfileStandardIsolation = None,
  timeouts: GoogleBigtableAppProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.appProfileId">app_profile_id</a></code> | <code>str</code> | The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.dataBoostIsolationReadOnly">data_boost_isolation_read_only</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a></code> | data_boost_isolation_read_only block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.description">description</a></code> | <code>str</code> | Long form description of the use case for this app profile. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#id GoogleBigtableAppProfile#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.ignoreWarnings">ignore_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, ignore safety checks when deleting/updating the app profile. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.instance">instance</a></code> | <code>str</code> | The name of the instance to create the app profile within. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.multiClusterRoutingClusterIds">multi_cluster_routing_cluster_ids</a></code> | <code>typing.List[str]</code> | The set of clusters to route to. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.multiClusterRoutingUseAny">multi_cluster_routing_use_any</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#project GoogleBigtableAppProfile#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.rowAffinity">row_affinity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Must be used with multi-cluster routing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.singleClusterRouting">single_cluster_routing</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a></code> | single_cluster_routing block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.standardIsolation">standard_isolation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a></code> | standard_isolation block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts">GoogleBigtableAppProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_profile_id`<sup>Required</sup> <a name="app_profile_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.appProfileId"></a>

```python
app_profile_id: str
```

- *Type:* str

The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#app_profile_id GoogleBigtableAppProfile#app_profile_id}

---

##### `data_boost_isolation_read_only`<sup>Optional</sup> <a name="data_boost_isolation_read_only" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.dataBoostIsolationReadOnly"></a>

```python
data_boost_isolation_read_only: GoogleBigtableAppProfileDataBoostIsolationReadOnly
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a>

data_boost_isolation_read_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#data_boost_isolation_read_only GoogleBigtableAppProfile#data_boost_isolation_read_only}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Long form description of the use case for this app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#description GoogleBigtableAppProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#id GoogleBigtableAppProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_warnings`<sup>Optional</sup> <a name="ignore_warnings" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.ignoreWarnings"></a>

```python
ignore_warnings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, ignore safety checks when deleting/updating the app profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#ignore_warnings GoogleBigtableAppProfile#ignore_warnings}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The name of the instance to create the app profile within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#instance GoogleBigtableAppProfile#instance}

---

##### `multi_cluster_routing_cluster_ids`<sup>Optional</sup> <a name="multi_cluster_routing_cluster_ids" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.multiClusterRoutingClusterIds"></a>

```python
multi_cluster_routing_cluster_ids: typing.List[str]
```

- *Type:* typing.List[str]

The set of clusters to route to.

The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#multi_cluster_routing_cluster_ids GoogleBigtableAppProfile#multi_cluster_routing_cluster_ids}

---

##### `multi_cluster_routing_use_any`<sup>Optional</sup> <a name="multi_cluster_routing_use_any" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.multiClusterRoutingUseAny"></a>

```python
multi_cluster_routing_use_any: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays.

Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#multi_cluster_routing_use_any GoogleBigtableAppProfile#multi_cluster_routing_use_any}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#project GoogleBigtableAppProfile#project}.

---

##### `row_affinity`<sup>Optional</sup> <a name="row_affinity" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.rowAffinity"></a>

```python
row_affinity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Must be used with multi-cluster routing.

If true, then this app profile will use row affinity sticky routing. With row affinity, Bigtable will route single row key requests based on the row key, rather than randomly. Instead, each row key will be assigned to a cluster by Cloud Bigtable, and will stick to that cluster. Choosing this option improves read-your-writes consistency for most requests under most circumstances, without sacrificing availability. Consistency is not guaranteed, as requests may still fail over between clusters in the event of errors or latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#row_affinity GoogleBigtableAppProfile#row_affinity}

---

##### `single_cluster_routing`<sup>Optional</sup> <a name="single_cluster_routing" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.singleClusterRouting"></a>

```python
single_cluster_routing: GoogleBigtableAppProfileSingleClusterRouting
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a>

single_cluster_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#single_cluster_routing GoogleBigtableAppProfile#single_cluster_routing}

---

##### `standard_isolation`<sup>Optional</sup> <a name="standard_isolation" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.standardIsolation"></a>

```python
standard_isolation: GoogleBigtableAppProfileStandardIsolation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a>

standard_isolation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#standard_isolation GoogleBigtableAppProfile#standard_isolation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileConfig.property.timeouts"></a>

```python
timeouts: GoogleBigtableAppProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts">GoogleBigtableAppProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#timeouts GoogleBigtableAppProfile#timeouts}

---

### GoogleBigtableAppProfileDataBoostIsolationReadOnly <a name="GoogleBigtableAppProfileDataBoostIsolationReadOnly" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly(
  compute_billing_owner: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly.property.computeBillingOwner">compute_billing_owner</a></code> | <code>str</code> | The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"]. |

---

##### `compute_billing_owner`<sup>Required</sup> <a name="compute_billing_owner" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly.property.computeBillingOwner"></a>

```python
compute_billing_owner: str
```

- *Type:* str

The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#compute_billing_owner GoogleBigtableAppProfile#compute_billing_owner}

---

### GoogleBigtableAppProfileSingleClusterRouting <a name="GoogleBigtableAppProfileSingleClusterRouting" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting(
  cluster_id: str,
  allow_transactional_writes: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting.property.clusterId">cluster_id</a></code> | <code>str</code> | The cluster to which read/write requests should be routed. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting.property.allowTransactionalWrites">allow_transactional_writes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile. |

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The cluster to which read/write requests should be routed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#cluster_id GoogleBigtableAppProfile#cluster_id}

---

##### `allow_transactional_writes`<sup>Optional</sup> <a name="allow_transactional_writes" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting.property.allowTransactionalWrites"></a>

```python
allow_transactional_writes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.

It is unsafe to send these requests to the same table/row/column in multiple clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#allow_transactional_writes GoogleBigtableAppProfile#allow_transactional_writes}

---

### GoogleBigtableAppProfileStandardIsolation <a name="GoogleBigtableAppProfileStandardIsolation" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation(
  priority: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation.property.priority">priority</a></code> | <code>str</code> | The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"]. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation.property.priority"></a>

```python
priority: str
```

- *Type:* str

The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#priority GoogleBigtableAppProfile#priority}

---

### GoogleBigtableAppProfileTimeouts <a name="GoogleBigtableAppProfileTimeouts" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#create GoogleBigtableAppProfile#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#delete GoogleBigtableAppProfile#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#update GoogleBigtableAppProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#create GoogleBigtableAppProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#delete GoogleBigtableAppProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_bigtable_app_profile#update GoogleBigtableAppProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference <a name="GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwnerInput">compute_billing_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwner">compute_billing_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_billing_owner_input`<sup>Optional</sup> <a name="compute_billing_owner_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwnerInput"></a>

```python
compute_billing_owner_input: str
```

- *Type:* str

---

##### `compute_billing_owner`<sup>Required</sup> <a name="compute_billing_owner" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.computeBillingOwner"></a>

```python
compute_billing_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigtableAppProfileDataBoostIsolationReadOnly
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileDataBoostIsolationReadOnly">GoogleBigtableAppProfileDataBoostIsolationReadOnly</a>

---


### GoogleBigtableAppProfileSingleClusterRoutingOutputReference <a name="GoogleBigtableAppProfileSingleClusterRoutingOutputReference" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.resetAllowTransactionalWrites">reset_allow_transactional_writes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_transactional_writes` <a name="reset_allow_transactional_writes" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.resetAllowTransactionalWrites"></a>

```python
def reset_allow_transactional_writes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWritesInput">allow_transactional_writes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWrites">allow_transactional_writes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_transactional_writes_input`<sup>Optional</sup> <a name="allow_transactional_writes_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWritesInput"></a>

```python
allow_transactional_writes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `allow_transactional_writes`<sup>Required</sup> <a name="allow_transactional_writes" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.allowTransactionalWrites"></a>

```python
allow_transactional_writes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRoutingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigtableAppProfileSingleClusterRouting
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileSingleClusterRouting">GoogleBigtableAppProfileSingleClusterRouting</a>

---


### GoogleBigtableAppProfileStandardIsolationOutputReference <a name="GoogleBigtableAppProfileStandardIsolationOutputReference" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.priorityInput">priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.priorityInput"></a>

```python
priority_input: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigtableAppProfileStandardIsolation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileStandardIsolation">GoogleBigtableAppProfileStandardIsolation</a>

---


### GoogleBigtableAppProfileTimeoutsOutputReference <a name="GoogleBigtableAppProfileTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_app_profile

googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts">GoogleBigtableAppProfileTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigtableAppProfileTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableAppProfile.GoogleBigtableAppProfileTimeouts">GoogleBigtableAppProfileTimeouts</a>]

---



