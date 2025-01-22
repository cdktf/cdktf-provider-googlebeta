# `googleBigtableGcPolicy` Submodule <a name="`googleBigtableGcPolicy` Submodule" id="@cdktf/provider-google-beta.googleBigtableGcPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableGcPolicy <a name="GoogleBigtableGcPolicy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy google_bigtable_gc_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_family: str,
  instance_name: str,
  table: str,
  deletion_policy: str = None,
  gc_rules: str = None,
  id: str = None,
  ignore_warnings: typing.Union[bool, IResolvable] = None,
  max_age: GoogleBigtableGcPolicyMaxAge = None,
  max_version: typing.Union[IResolvable, typing.List[GoogleBigtableGcPolicyMaxVersion]] = None,
  mode: str = None,
  project: str = None,
  timeouts: GoogleBigtableGcPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.columnFamily">column_family</a></code> | <code>str</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.table">table</a></code> | <code>str</code> | The name of the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The deletion policy for the GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.gcRules">gc_rules</a></code> | <code>str</code> | Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#id GoogleBigtableGcPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.ignoreWarnings">ignore_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows ignoring warnings when updating the GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.maxAge">max_age</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a></code> | max_age block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.maxVersion">max_version</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>]]</code> | max_version block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.mode">mode</a></code> | <code>str</code> | NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_family`<sup>Required</sup> <a name="column_family" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.columnFamily"></a>

- *Type:* str

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#column_family GoogleBigtableGcPolicy#column_family}

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.instanceName"></a>

- *Type:* str

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#instance_name GoogleBigtableGcPolicy#instance_name}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.table"></a>

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#table GoogleBigtableGcPolicy#table}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

The deletion policy for the GC policy.

Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted
in a replicated instance. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#deletion_policy GoogleBigtableGcPolicy#deletion_policy}

---

##### `gc_rules`<sup>Optional</sup> <a name="gc_rules" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.gcRules"></a>

- *Type:* str

Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#gc_rules GoogleBigtableGcPolicy#gc_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#id GoogleBigtableGcPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_warnings`<sup>Optional</sup> <a name="ignore_warnings" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.ignoreWarnings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows ignoring warnings when updating the GC policy.

This can be used
to increase the gc policy on replicated clusters. Doing this may make clusters be
inconsistent for a longer period of time, before using this make sure you understand
the risks listed at https://cloud.google.com/bigtable/docs/garbage-collection#increasing

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#ignore_warnings GoogleBigtableGcPolicy#ignore_warnings}

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.maxAge"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

max_age block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#max_age GoogleBigtableGcPolicy#max_age}

---

##### `max_version`<sup>Optional</sup> <a name="max_version" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.maxVersion"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>]]

max_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#max_version GoogleBigtableGcPolicy#max_version}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.mode"></a>

- *Type:* str

NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources.

This field may be deprecated in the future. If multiple policies are set, you should choose between UNION OR INTERSECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#mode GoogleBigtableGcPolicy#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#project GoogleBigtableGcPolicy#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#timeouts GoogleBigtableGcPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxAge">put_max_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxVersion">put_max_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetGcRules">reset_gc_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetIgnoreWarnings">reset_ignore_warnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMaxAge">reset_max_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMaxVersion">reset_max_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_max_age` <a name="put_max_age" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxAge"></a>

```python
def put_max_age(
  days: typing.Union[int, float] = None,
  duration: str = None
) -> None
```

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxAge.parameter.days"></a>

- *Type:* typing.Union[int, float]

Number of days before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#days GoogleBigtableGcPolicy#days}

---

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxAge.parameter.duration"></a>

- *Type:* str

Duration before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#duration GoogleBigtableGcPolicy#duration}

---

##### `put_max_version` <a name="put_max_version" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxVersion"></a>

```python
def put_max_version(
  value: typing.Union[IResolvable, typing.List[GoogleBigtableGcPolicyMaxVersion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxVersion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#create GoogleBigtableGcPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#delete GoogleBigtableGcPolicy#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_gc_rules` <a name="reset_gc_rules" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetGcRules"></a>

```python
def reset_gc_rules() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_warnings` <a name="reset_ignore_warnings" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetIgnoreWarnings"></a>

```python
def reset_ignore_warnings() -> None
```

##### `reset_max_age` <a name="reset_max_age" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMaxAge"></a>

```python
def reset_max_age() -> None
```

##### `reset_max_version` <a name="reset_max_version" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMaxVersion"></a>

```python
def reset_max_version() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigtableGcPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigtableGcPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigtableGcPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigtableGcPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigtableGcPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxAge">max_age</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference">GoogleBigtableGcPolicyMaxAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxVersion">max_version</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList">GoogleBigtableGcPolicyMaxVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference">GoogleBigtableGcPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.columnFamilyInput">column_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.gcRulesInput">gc_rules_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.ignoreWarningsInput">ignore_warnings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxAgeInput">max_age_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxVersionInput">max_version_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.columnFamily">column_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.gcRules">gc_rules</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.ignoreWarnings">ignore_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.table">table</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxAge"></a>

```python
max_age: GoogleBigtableGcPolicyMaxAgeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference">GoogleBigtableGcPolicyMaxAgeOutputReference</a>

---

##### `max_version`<sup>Required</sup> <a name="max_version" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxVersion"></a>

```python
max_version: GoogleBigtableGcPolicyMaxVersionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList">GoogleBigtableGcPolicyMaxVersionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.timeouts"></a>

```python
timeouts: GoogleBigtableGcPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference">GoogleBigtableGcPolicyTimeoutsOutputReference</a>

---

##### `column_family_input`<sup>Optional</sup> <a name="column_family_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.columnFamilyInput"></a>

```python
column_family_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `gc_rules_input`<sup>Optional</sup> <a name="gc_rules_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.gcRulesInput"></a>

```python
gc_rules_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_warnings_input`<sup>Optional</sup> <a name="ignore_warnings_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.ignoreWarningsInput"></a>

```python
ignore_warnings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `max_age_input`<sup>Optional</sup> <a name="max_age_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxAgeInput"></a>

```python
max_age_input: GoogleBigtableGcPolicyMaxAge
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

---

##### `max_version_input`<sup>Optional</sup> <a name="max_version_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxVersionInput"></a>

```python
max_version_input: typing.Union[IResolvable, typing.List[GoogleBigtableGcPolicyMaxVersion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>]]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBigtableGcPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>]

---

##### `column_family`<sup>Required</sup> <a name="column_family" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.columnFamily"></a>

```python
column_family: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `gc_rules`<sup>Required</sup> <a name="gc_rules" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.gcRules"></a>

```python
gc_rules: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_warnings`<sup>Required</sup> <a name="ignore_warnings" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.ignoreWarnings"></a>

```python
ignore_warnings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.table"></a>

```python
table: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableGcPolicyConfig <a name="GoogleBigtableGcPolicyConfig" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_family: str,
  instance_name: str,
  table: str,
  deletion_policy: str = None,
  gc_rules: str = None,
  id: str = None,
  ignore_warnings: typing.Union[bool, IResolvable] = None,
  max_age: GoogleBigtableGcPolicyMaxAge = None,
  max_version: typing.Union[IResolvable, typing.List[GoogleBigtableGcPolicyMaxVersion]] = None,
  mode: str = None,
  project: str = None,
  timeouts: GoogleBigtableGcPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.columnFamily">column_family</a></code> | <code>str</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.instanceName">instance_name</a></code> | <code>str</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.table">table</a></code> | <code>str</code> | The name of the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The deletion policy for the GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.gcRules">gc_rules</a></code> | <code>str</code> | Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#id GoogleBigtableGcPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.ignoreWarnings">ignore_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows ignoring warnings when updating the GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.maxAge">max_age</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a></code> | max_age block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.maxVersion">max_version</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>]]</code> | max_version block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.mode">mode</a></code> | <code>str</code> | NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_family`<sup>Required</sup> <a name="column_family" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.columnFamily"></a>

```python
column_family: str
```

- *Type:* str

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#column_family GoogleBigtableGcPolicy#column_family}

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#instance_name GoogleBigtableGcPolicy#instance_name}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.table"></a>

```python
table: str
```

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#table GoogleBigtableGcPolicy#table}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

The deletion policy for the GC policy.

Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted
in a replicated instance. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#deletion_policy GoogleBigtableGcPolicy#deletion_policy}

---

##### `gc_rules`<sup>Optional</sup> <a name="gc_rules" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.gcRules"></a>

```python
gc_rules: str
```

- *Type:* str

Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#gc_rules GoogleBigtableGcPolicy#gc_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#id GoogleBigtableGcPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_warnings`<sup>Optional</sup> <a name="ignore_warnings" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.ignoreWarnings"></a>

```python
ignore_warnings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows ignoring warnings when updating the GC policy.

This can be used
to increase the gc policy on replicated clusters. Doing this may make clusters be
inconsistent for a longer period of time, before using this make sure you understand
the risks listed at https://cloud.google.com/bigtable/docs/garbage-collection#increasing

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#ignore_warnings GoogleBigtableGcPolicy#ignore_warnings}

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.maxAge"></a>

```python
max_age: GoogleBigtableGcPolicyMaxAge
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

max_age block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#max_age GoogleBigtableGcPolicy#max_age}

---

##### `max_version`<sup>Optional</sup> <a name="max_version" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.maxVersion"></a>

```python
max_version: typing.Union[IResolvable, typing.List[GoogleBigtableGcPolicyMaxVersion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>]]

max_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#max_version GoogleBigtableGcPolicy#max_version}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources.

This field may be deprecated in the future. If multiple policies are set, you should choose between UNION OR INTERSECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#mode GoogleBigtableGcPolicy#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#project GoogleBigtableGcPolicy#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleBigtableGcPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#timeouts GoogleBigtableGcPolicy#timeouts}

---

### GoogleBigtableGcPolicyMaxAge <a name="GoogleBigtableGcPolicyMaxAge" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge(
  days: typing.Union[int, float] = None,
  duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Number of days before applying GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.property.duration">duration</a></code> | <code>str</code> | Duration before applying GC policy. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#days GoogleBigtableGcPolicy#days}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.property.duration"></a>

```python
duration: str
```

- *Type:* str

Duration before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#duration GoogleBigtableGcPolicy#duration}

---

### GoogleBigtableGcPolicyMaxVersion <a name="GoogleBigtableGcPolicyMaxVersion" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion(
  number: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion.property.number">number</a></code> | <code>typing.Union[int, float]</code> | Number of version before applying the GC policy. |

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of version before applying the GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#number GoogleBigtableGcPolicy#number}

---

### GoogleBigtableGcPolicyTimeouts <a name="GoogleBigtableGcPolicyTimeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#create GoogleBigtableGcPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#delete GoogleBigtableGcPolicy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#create GoogleBigtableGcPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigtable_gc_policy#delete GoogleBigtableGcPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableGcPolicyMaxAgeOutputReference <a name="GoogleBigtableGcPolicyMaxAgeOutputReference" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resetDuration">reset_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigtableGcPolicyMaxAge
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

---


### GoogleBigtableGcPolicyMaxVersionList <a name="GoogleBigtableGcPolicyMaxVersionList" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigtableGcPolicyMaxVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBigtableGcPolicyMaxVersion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>]]

---


### GoogleBigtableGcPolicyMaxVersionOutputReference <a name="GoogleBigtableGcPolicyMaxVersionOutputReference" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.numberInput">number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_input`<sup>Optional</sup> <a name="number_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.numberInput"></a>

```python
number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigtableGcPolicyMaxVersion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>]

---


### GoogleBigtableGcPolicyTimeoutsOutputReference <a name="GoogleBigtableGcPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_gc_policy

googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigtableGcPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>]

---



