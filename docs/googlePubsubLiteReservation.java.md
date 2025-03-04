# `googlePubsubLiteReservation` Submodule <a name="`googlePubsubLiteReservation` Submodule" id="@cdktf/provider-google-beta.googlePubsubLiteReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePubsubLiteReservation <a name="GooglePubsubLiteReservation" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation google_pubsub_lite_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_pubsub_lite_reservation.GooglePubsubLiteReservation;

GooglePubsubLiteReservation.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .throughputCapacity(java.lang.Number)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GooglePubsubLiteReservationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the reservation. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | The reserved throughput capacity. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#id GooglePubsubLiteReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#project GooglePubsubLiteReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the pubsub lite reservation. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#name GooglePubsubLiteReservation#name}

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.throughputCapacity"></a>

- *Type:* java.lang.Number

The reserved throughput capacity.

Every unit of throughput capacity is
equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed
messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#throughput_capacity GooglePubsubLiteReservation#throughput_capacity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#id GooglePubsubLiteReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#project GooglePubsubLiteReservation#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the pubsub lite reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#region GooglePubsubLiteReservation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#timeouts GooglePubsubLiteReservation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.putTimeouts"></a>

```java
public void putTimeouts(GooglePubsubLiteReservationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePubsubLiteReservation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_pubsub_lite_reservation.GooglePubsubLiteReservation;

GooglePubsubLiteReservation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_pubsub_lite_reservation.GooglePubsubLiteReservation;

GooglePubsubLiteReservation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_pubsub_lite_reservation.GooglePubsubLiteReservation;

GooglePubsubLiteReservation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_pubsub_lite_reservation.GooglePubsubLiteReservation;

GooglePubsubLiteReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GooglePubsubLiteReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GooglePubsubLiteReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GooglePubsubLiteReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GooglePubsubLiteReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GooglePubsubLiteReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference">GooglePubsubLiteReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.throughputCapacityInput">throughputCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.timeouts"></a>

```java
public GooglePubsubLiteReservationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference">GooglePubsubLiteReservationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `throughputCapacityInput`<sup>Optional</sup> <a name="throughputCapacityInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.throughputCapacityInput"></a>

```java
public java.lang.Number getThroughputCapacityInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.throughputCapacity"></a>

```java
public java.lang.Number getThroughputCapacity();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePubsubLiteReservationConfig <a name="GooglePubsubLiteReservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_pubsub_lite_reservation.GooglePubsubLiteReservationConfig;

GooglePubsubLiteReservationConfig.builder()
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
    .name(java.lang.String)
    .throughputCapacity(java.lang.Number)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GooglePubsubLiteReservationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the reservation. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | The reserved throughput capacity. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#id GooglePubsubLiteReservation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#project GooglePubsubLiteReservation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the pubsub lite reservation. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#name GooglePubsubLiteReservation#name}

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.throughputCapacity"></a>

```java
public java.lang.Number getThroughputCapacity();
```

- *Type:* java.lang.Number

The reserved throughput capacity.

Every unit of throughput capacity is
equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed
messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#throughput_capacity GooglePubsubLiteReservation#throughput_capacity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#id GooglePubsubLiteReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#project GooglePubsubLiteReservation#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the pubsub lite reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#region GooglePubsubLiteReservation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationConfig.property.timeouts"></a>

```java
public GooglePubsubLiteReservationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#timeouts GooglePubsubLiteReservation#timeouts}

---

### GooglePubsubLiteReservationTimeouts <a name="GooglePubsubLiteReservationTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_pubsub_lite_reservation.GooglePubsubLiteReservationTimeouts;

GooglePubsubLiteReservationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#create GooglePubsubLiteReservation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#delete GooglePubsubLiteReservation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#update GooglePubsubLiteReservation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#create GooglePubsubLiteReservation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#delete GooglePubsubLiteReservation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_pubsub_lite_reservation#update GooglePubsubLiteReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePubsubLiteReservationTimeoutsOutputReference <a name="GooglePubsubLiteReservationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_pubsub_lite_reservation.GooglePubsubLiteReservationTimeoutsOutputReference;

new GooglePubsubLiteReservationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googlePubsubLiteReservation.GooglePubsubLiteReservationTimeouts">GooglePubsubLiteReservationTimeouts</a>

---



