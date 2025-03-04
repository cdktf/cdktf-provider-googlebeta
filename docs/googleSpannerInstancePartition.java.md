# `googleSpannerInstancePartition` Submodule <a name="`googleSpannerInstancePartition` Submodule" id="@cdktf/provider-google-beta.googleSpannerInstancePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerInstancePartition <a name="GoogleSpannerInstancePartition" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition google_spanner_instance_partition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartition;

GoogleSpannerInstancePartition.Builder.create(Construct scope, java.lang.String id)
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
    .config(java.lang.String)
    .displayName(java.lang.String)
    .instance(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .nodeCount(java.lang.Number)
//  .processingUnits(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleSpannerInstancePartitionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.config">config</a></code> | <code>java.lang.String</code> | The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The descriptive name for this instance partition as it appears in UIs. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The instance to create the instance partition in. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the instance partition, which cannot be changed after the instance partition is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#id GoogleSpannerInstancePartition#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes allocated to this instance partition. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.processingUnits">processingUnits</a></code> | <code>java.lang.Number</code> | The number of processing units allocated to this instance partition. Exactly one of either node_count or processing_units must be present. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#project GoogleSpannerInstancePartition#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.config"></a>

- *Type:* java.lang.String

The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#config GoogleSpannerInstancePartition#config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The descriptive name for this instance partition as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#display_name GoogleSpannerInstancePartition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The instance to create the instance partition in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#instance GoogleSpannerInstancePartition#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique identifier for the instance partition, which cannot be changed after the instance partition is created.

The name must be between 2 and 64 characters
and match the regular expression [a-z][a-z0-9\-]{0,61}[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#name GoogleSpannerInstancePartition#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#id GoogleSpannerInstancePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.nodeCount"></a>

- *Type:* java.lang.Number

The number of nodes allocated to this instance partition.

One node equals
1000 processing units. Exactly one of either node_count or processing_units
must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#node_count GoogleSpannerInstancePartition#node_count}

---

##### `processingUnits`<sup>Optional</sup> <a name="processingUnits" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.processingUnits"></a>

- *Type:* java.lang.Number

The number of processing units allocated to this instance partition. Exactly one of either node_count or processing_units must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#processing_units GoogleSpannerInstancePartition#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#project GoogleSpannerInstancePartition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#timeouts GoogleSpannerInstancePartition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetProcessingUnits">resetProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putTimeouts"></a>

```java
public void putTimeouts(GoogleSpannerInstancePartitionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetId"></a>

```java
public void resetId()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetNodeCount"></a>

```java
public void resetNodeCount()
```

##### `resetProcessingUnits` <a name="resetProcessingUnits" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetProcessingUnits"></a>

```java
public void resetProcessingUnits()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSpannerInstancePartition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartition;

GoogleSpannerInstancePartition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartition;

GoogleSpannerInstancePartition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartition;

GoogleSpannerInstancePartition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartition;

GoogleSpannerInstancePartition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSpannerInstancePartition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleSpannerInstancePartition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSpannerInstancePartition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSpannerInstancePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSpannerInstancePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference">GoogleSpannerInstancePartitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.configInput">configInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.processingUnitsInput">processingUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.config">config</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.processingUnits">processingUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.timeouts"></a>

```java
public GoogleSpannerInstancePartitionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference">GoogleSpannerInstancePartitionTimeoutsOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.configInput"></a>

```java
public java.lang.String getConfigInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `processingUnitsInput`<sup>Optional</sup> <a name="processingUnitsInput" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.processingUnitsInput"></a>

```java
public java.lang.Number getProcessingUnitsInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `processingUnits`<sup>Required</sup> <a name="processingUnits" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.processingUnits"></a>

```java
public java.lang.Number getProcessingUnits();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerInstancePartitionConfig <a name="GoogleSpannerInstancePartitionConfig" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartitionConfig;

GoogleSpannerInstancePartitionConfig.builder()
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
    .config(java.lang.String)
    .displayName(java.lang.String)
    .instance(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .nodeCount(java.lang.Number)
//  .processingUnits(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleSpannerInstancePartitionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.config">config</a></code> | <code>java.lang.String</code> | The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The descriptive name for this instance partition as it appears in UIs. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The instance to create the instance partition in. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the instance partition, which cannot be changed after the instance partition is created. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#id GoogleSpannerInstancePartition#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes allocated to this instance partition. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.processingUnits">processingUnits</a></code> | <code>java.lang.Number</code> | The number of processing units allocated to this instance partition. Exactly one of either node_count or processing_units must be present. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#project GoogleSpannerInstancePartition#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#config GoogleSpannerInstancePartition#config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The descriptive name for this instance partition as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#display_name GoogleSpannerInstancePartition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The instance to create the instance partition in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#instance GoogleSpannerInstancePartition#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique identifier for the instance partition, which cannot be changed after the instance partition is created.

The name must be between 2 and 64 characters
and match the regular expression [a-z][a-z0-9\-]{0,61}[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#name GoogleSpannerInstancePartition#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#id GoogleSpannerInstancePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

The number of nodes allocated to this instance partition.

One node equals
1000 processing units. Exactly one of either node_count or processing_units
must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#node_count GoogleSpannerInstancePartition#node_count}

---

##### `processingUnits`<sup>Optional</sup> <a name="processingUnits" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.processingUnits"></a>

```java
public java.lang.Number getProcessingUnits();
```

- *Type:* java.lang.Number

The number of processing units allocated to this instance partition. Exactly one of either node_count or processing_units must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#processing_units GoogleSpannerInstancePartition#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#project GoogleSpannerInstancePartition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.timeouts"></a>

```java
public GoogleSpannerInstancePartitionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#timeouts GoogleSpannerInstancePartition#timeouts}

---

### GoogleSpannerInstancePartitionTimeouts <a name="GoogleSpannerInstancePartitionTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartitionTimeouts;

GoogleSpannerInstancePartitionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#create GoogleSpannerInstancePartition#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#delete GoogleSpannerInstancePartition#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#update GoogleSpannerInstancePartition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#create GoogleSpannerInstancePartition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#delete GoogleSpannerInstancePartition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_spanner_instance_partition#update GoogleSpannerInstancePartition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerInstancePartitionTimeoutsOutputReference <a name="GoogleSpannerInstancePartitionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartitionTimeoutsOutputReference;

new GoogleSpannerInstancePartitionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a>

---



