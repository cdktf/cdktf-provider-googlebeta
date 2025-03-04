# `googleBigtableGcPolicy` Submodule <a name="`googleBigtableGcPolicy` Submodule" id="@cdktf/provider-google-beta.googleBigtableGcPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableGcPolicy <a name="GoogleBigtableGcPolicy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy google_bigtable_gc_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicy;

GoogleBigtableGcPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .columnFamily(java.lang.String)
    .instanceName(java.lang.String)
    .table(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .gcRules(java.lang.String)
//  .id(java.lang.String)
//  .ignoreWarnings(java.lang.Boolean)
//  .ignoreWarnings(IResolvable)
//  .maxAge(GoogleBigtableGcPolicyMaxAge)
//  .maxVersion(IResolvable)
//  .maxVersion(java.util.List<GoogleBigtableGcPolicyMaxVersion>)
//  .mode(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleBigtableGcPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.columnFamily">columnFamily</a></code> | <code>java.lang.String</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.instanceName">instanceName</a></code> | <code>java.lang.String</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.table">table</a></code> | <code>java.lang.String</code> | The name of the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The deletion policy for the GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.gcRules">gcRules</a></code> | <code>java.lang.String</code> | Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#id GoogleBigtableGcPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.ignoreWarnings">ignoreWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows ignoring warnings when updating the GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.maxAge">maxAge</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a></code> | max_age block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.maxVersion">maxVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>></code> | max_version block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `columnFamily`<sup>Required</sup> <a name="columnFamily" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.columnFamily"></a>

- *Type:* java.lang.String

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#column_family GoogleBigtableGcPolicy#column_family}

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.instanceName"></a>

- *Type:* java.lang.String

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#instance_name GoogleBigtableGcPolicy#instance_name}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.table"></a>

- *Type:* java.lang.String

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#table GoogleBigtableGcPolicy#table}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

The deletion policy for the GC policy.

Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted
in a replicated instance. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#deletion_policy GoogleBigtableGcPolicy#deletion_policy}

---

##### `gcRules`<sup>Optional</sup> <a name="gcRules" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.gcRules"></a>

- *Type:* java.lang.String

Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#gc_rules GoogleBigtableGcPolicy#gc_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#id GoogleBigtableGcPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreWarnings`<sup>Optional</sup> <a name="ignoreWarnings" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.ignoreWarnings"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows ignoring warnings when updating the GC policy.

This can be used
to increase the gc policy on replicated clusters. Doing this may make clusters be
inconsistent for a longer period of time, before using this make sure you understand
the risks listed at https://cloud.google.com/bigtable/docs/garbage-collection#increasing

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#ignore_warnings GoogleBigtableGcPolicy#ignore_warnings}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.maxAge"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

max_age block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#max_age GoogleBigtableGcPolicy#max_age}

---

##### `maxVersion`<sup>Optional</sup> <a name="maxVersion" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.maxVersion"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>>

max_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#max_version GoogleBigtableGcPolicy#max_version}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources.

This field may be deprecated in the future. If multiple policies are set, you should choose between UNION OR INTERSECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#mode GoogleBigtableGcPolicy#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#project GoogleBigtableGcPolicy#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#timeouts GoogleBigtableGcPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxAge">putMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxVersion">putMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetGcRules">resetGcRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetIgnoreWarnings">resetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMaxAge">resetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMaxVersion">resetMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaxAge` <a name="putMaxAge" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxAge"></a>

```java
public void putMaxAge(GoogleBigtableGcPolicyMaxAge value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxAge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

---

##### `putMaxVersion` <a name="putMaxVersion" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxVersion"></a>

```java
public void putMaxVersion(IResolvable OR java.util.List<GoogleBigtableGcPolicyMaxVersion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putMaxVersion.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleBigtableGcPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetGcRules` <a name="resetGcRules" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetGcRules"></a>

```java
public void resetGcRules()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreWarnings` <a name="resetIgnoreWarnings" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetIgnoreWarnings"></a>

```java
public void resetIgnoreWarnings()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMaxAge"></a>

```java
public void resetMaxAge()
```

##### `resetMaxVersion` <a name="resetMaxVersion" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMaxVersion"></a>

```java
public void resetMaxVersion()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetMode"></a>

```java
public void resetMode()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigtableGcPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicy;

GoogleBigtableGcPolicy.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicy;

GoogleBigtableGcPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicy;

GoogleBigtableGcPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicy;

GoogleBigtableGcPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBigtableGcPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBigtableGcPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBigtableGcPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBigtableGcPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigtableGcPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxAge">maxAge</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference">GoogleBigtableGcPolicyMaxAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxVersion">maxVersion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList">GoogleBigtableGcPolicyMaxVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference">GoogleBigtableGcPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.columnFamilyInput">columnFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.gcRulesInput">gcRulesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.ignoreWarningsInput">ignoreWarningsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxAgeInput">maxAgeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxVersionInput">maxVersionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.tableInput">tableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.columnFamily">columnFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.gcRules">gcRules</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.ignoreWarnings">ignoreWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxAge"></a>

```java
public GoogleBigtableGcPolicyMaxAgeOutputReference getMaxAge();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference">GoogleBigtableGcPolicyMaxAgeOutputReference</a>

---

##### `maxVersion`<sup>Required</sup> <a name="maxVersion" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxVersion"></a>

```java
public GoogleBigtableGcPolicyMaxVersionList getMaxVersion();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList">GoogleBigtableGcPolicyMaxVersionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.timeouts"></a>

```java
public GoogleBigtableGcPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference">GoogleBigtableGcPolicyTimeoutsOutputReference</a>

---

##### `columnFamilyInput`<sup>Optional</sup> <a name="columnFamilyInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.columnFamilyInput"></a>

```java
public java.lang.String getColumnFamilyInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `gcRulesInput`<sup>Optional</sup> <a name="gcRulesInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.gcRulesInput"></a>

```java
public java.lang.String getGcRulesInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreWarningsInput`<sup>Optional</sup> <a name="ignoreWarningsInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.ignoreWarningsInput"></a>

```java
public java.lang.Object getIgnoreWarningsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxAgeInput"></a>

```java
public GoogleBigtableGcPolicyMaxAge getMaxAgeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

---

##### `maxVersionInput`<sup>Optional</sup> <a name="maxVersionInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.maxVersionInput"></a>

```java
public java.lang.Object getMaxVersionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.tableInput"></a>

```java
public java.lang.String getTableInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>

---

##### `columnFamily`<sup>Required</sup> <a name="columnFamily" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.columnFamily"></a>

```java
public java.lang.String getColumnFamily();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `gcRules`<sup>Required</sup> <a name="gcRules" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.gcRules"></a>

```java
public java.lang.String getGcRules();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreWarnings`<sup>Required</sup> <a name="ignoreWarnings" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.ignoreWarnings"></a>

```java
public java.lang.Object getIgnoreWarnings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableGcPolicyConfig <a name="GoogleBigtableGcPolicyConfig" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicyConfig;

GoogleBigtableGcPolicyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .columnFamily(java.lang.String)
    .instanceName(java.lang.String)
    .table(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .gcRules(java.lang.String)
//  .id(java.lang.String)
//  .ignoreWarnings(java.lang.Boolean)
//  .ignoreWarnings(IResolvable)
//  .maxAge(GoogleBigtableGcPolicyMaxAge)
//  .maxVersion(IResolvable)
//  .maxVersion(java.util.List<GoogleBigtableGcPolicyMaxVersion>)
//  .mode(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleBigtableGcPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.columnFamily">columnFamily</a></code> | <code>java.lang.String</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.table">table</a></code> | <code>java.lang.String</code> | The name of the table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | The deletion policy for the GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.gcRules">gcRules</a></code> | <code>java.lang.String</code> | Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#id GoogleBigtableGcPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.ignoreWarnings">ignoreWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows ignoring warnings when updating the GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.maxAge">maxAge</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a></code> | max_age block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.maxVersion">maxVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>></code> | max_version block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `columnFamily`<sup>Required</sup> <a name="columnFamily" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.columnFamily"></a>

```java
public java.lang.String getColumnFamily();
```

- *Type:* java.lang.String

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#column_family GoogleBigtableGcPolicy#column_family}

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#instance_name GoogleBigtableGcPolicy#instance_name}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#table GoogleBigtableGcPolicy#table}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

The deletion policy for the GC policy.

Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted
in a replicated instance. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#deletion_policy GoogleBigtableGcPolicy#deletion_policy}

---

##### `gcRules`<sup>Optional</sup> <a name="gcRules" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.gcRules"></a>

```java
public java.lang.String getGcRules();
```

- *Type:* java.lang.String

Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#gc_rules GoogleBigtableGcPolicy#gc_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#id GoogleBigtableGcPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreWarnings`<sup>Optional</sup> <a name="ignoreWarnings" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.ignoreWarnings"></a>

```java
public java.lang.Object getIgnoreWarnings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows ignoring warnings when updating the GC policy.

This can be used
to increase the gc policy on replicated clusters. Doing this may make clusters be
inconsistent for a longer period of time, before using this make sure you understand
the risks listed at https://cloud.google.com/bigtable/docs/garbage-collection#increasing

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#ignore_warnings GoogleBigtableGcPolicy#ignore_warnings}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.maxAge"></a>

```java
public GoogleBigtableGcPolicyMaxAge getMaxAge();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

max_age block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#max_age GoogleBigtableGcPolicy#max_age}

---

##### `maxVersion`<sup>Optional</sup> <a name="maxVersion" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.maxVersion"></a>

```java
public java.lang.Object getMaxVersion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>>

max_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#max_version GoogleBigtableGcPolicy#max_version}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources.

This field may be deprecated in the future. If multiple policies are set, you should choose between UNION OR INTERSECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#mode GoogleBigtableGcPolicy#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#project GoogleBigtableGcPolicy#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyConfig.property.timeouts"></a>

```java
public GoogleBigtableGcPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#timeouts GoogleBigtableGcPolicy#timeouts}

---

### GoogleBigtableGcPolicyMaxAge <a name="GoogleBigtableGcPolicyMaxAge" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicyMaxAge;

GoogleBigtableGcPolicyMaxAge.builder()
//  .days(java.lang.Number)
//  .duration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.property.days">days</a></code> | <code>java.lang.Number</code> | Number of days before applying GC policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.property.duration">duration</a></code> | <code>java.lang.String</code> | Duration before applying GC policy. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Number of days before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#days GoogleBigtableGcPolicy#days}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Duration before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#duration GoogleBigtableGcPolicy#duration}

---

### GoogleBigtableGcPolicyMaxVersion <a name="GoogleBigtableGcPolicyMaxVersion" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicyMaxVersion;

GoogleBigtableGcPolicyMaxVersion.builder()
    .number(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion.property.number">number</a></code> | <code>java.lang.Number</code> | Number of version before applying the GC policy. |

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion.property.number"></a>

```java
public java.lang.Number getNumber();
```

- *Type:* java.lang.Number

Number of version before applying the GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#number GoogleBigtableGcPolicy#number}

---

### GoogleBigtableGcPolicyTimeouts <a name="GoogleBigtableGcPolicyTimeouts" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicyTimeouts;

GoogleBigtableGcPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#create GoogleBigtableGcPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#delete GoogleBigtableGcPolicy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#create GoogleBigtableGcPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_bigtable_gc_policy#delete GoogleBigtableGcPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableGcPolicyMaxAgeOutputReference <a name="GoogleBigtableGcPolicyMaxAgeOutputReference" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicyMaxAgeOutputReference;

new GoogleBigtableGcPolicyMaxAgeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resetDays"></a>

```java
public void resetDays()
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.resetDuration"></a>

```java
public void resetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAgeOutputReference.property.internalValue"></a>

```java
public GoogleBigtableGcPolicyMaxAge getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxAge">GoogleBigtableGcPolicyMaxAge</a>

---


### GoogleBigtableGcPolicyMaxVersionList <a name="GoogleBigtableGcPolicyMaxVersionList" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicyMaxVersionList;

new GoogleBigtableGcPolicyMaxVersionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.get"></a>

```java
public GoogleBigtableGcPolicyMaxVersionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>>

---


### GoogleBigtableGcPolicyMaxVersionOutputReference <a name="GoogleBigtableGcPolicyMaxVersionOutputReference" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicyMaxVersionOutputReference;

new GoogleBigtableGcPolicyMaxVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.numberInput">numberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.number">number</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.numberInput"></a>

```java
public java.lang.Number getNumberInput();
```

- *Type:* java.lang.Number

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.number"></a>

```java
public java.lang.Number getNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyMaxVersion">GoogleBigtableGcPolicyMaxVersion</a>

---


### GoogleBigtableGcPolicyTimeoutsOutputReference <a name="GoogleBigtableGcPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_bigtable_gc_policy.GoogleBigtableGcPolicyTimeoutsOutputReference;

new GoogleBigtableGcPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBigtableGcPolicy.GoogleBigtableGcPolicyTimeouts">GoogleBigtableGcPolicyTimeouts</a>

---



