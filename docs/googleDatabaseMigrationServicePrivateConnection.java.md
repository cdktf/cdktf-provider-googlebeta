# `googleDatabaseMigrationServicePrivateConnection` Submodule <a name="`googleDatabaseMigrationServicePrivateConnection` Submodule" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatabaseMigrationServicePrivateConnection <a name="GoogleDatabaseMigrationServicePrivateConnection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection google_database_migration_service_private_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnection;

GoogleDatabaseMigrationServicePrivateConnection.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .privateConnectionId(java.lang.String)
    .vpcPeeringConfig(GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleDatabaseMigrationServicePrivateConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.privateConnectionId">privateConnectionId</a></code> | <code>java.lang.String</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.vpcPeeringConfig">vpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#id GoogleDatabaseMigrationServicePrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#project GoogleDatabaseMigrationServicePrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#location GoogleDatabaseMigrationServicePrivateConnection#location}

---

##### `privateConnectionId`<sup>Required</sup> <a name="privateConnectionId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.privateConnectionId"></a>

- *Type:* java.lang.String

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#private_connection_id GoogleDatabaseMigrationServicePrivateConnection#private_connection_id}

---

##### `vpcPeeringConfig`<sup>Required</sup> <a name="vpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.vpcPeeringConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#vpc_peering_config GoogleDatabaseMigrationServicePrivateConnection#vpc_peering_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#display_name GoogleDatabaseMigrationServicePrivateConnection#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#id GoogleDatabaseMigrationServicePrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#labels GoogleDatabaseMigrationServicePrivateConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#project GoogleDatabaseMigrationServicePrivateConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#timeouts GoogleDatabaseMigrationServicePrivateConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putVpcPeeringConfig">putVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putTimeouts"></a>

```java
public void putTimeouts(GoogleDatabaseMigrationServicePrivateConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>

---

##### `putVpcPeeringConfig` <a name="putVpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putVpcPeeringConfig"></a>

```java
public void putVpcPeeringConfig(GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.putVpcPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDatabaseMigrationServicePrivateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnection;

GoogleDatabaseMigrationServicePrivateConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnection;

GoogleDatabaseMigrationServicePrivateConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnection;

GoogleDatabaseMigrationServicePrivateConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnection;

GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDatabaseMigrationServicePrivateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDatabaseMigrationServicePrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDatabaseMigrationServicePrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDatabaseMigrationServicePrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.error">error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList">GoogleDatabaseMigrationServicePrivateConnectionErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference">GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.vpcPeeringConfig">vpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.privateConnectionIdInput">privateConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.vpcPeeringConfigInput">vpcPeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.privateConnectionId">privateConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.error"></a>

```java
public GoogleDatabaseMigrationServicePrivateConnectionErrorList getError();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList">GoogleDatabaseMigrationServicePrivateConnectionErrorList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.timeouts"></a>

```java
public GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference">GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference</a>

---

##### `vpcPeeringConfig`<sup>Required</sup> <a name="vpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.vpcPeeringConfig"></a>

```java
public GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference getVpcPeeringConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `privateConnectionIdInput`<sup>Optional</sup> <a name="privateConnectionIdInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.privateConnectionIdInput"></a>

```java
public java.lang.String getPrivateConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>

---

##### `vpcPeeringConfigInput`<sup>Optional</sup> <a name="vpcPeeringConfigInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.vpcPeeringConfigInput"></a>

```java
public GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig getVpcPeeringConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `privateConnectionId`<sup>Required</sup> <a name="privateConnectionId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.privateConnectionId"></a>

```java
public java.lang.String getPrivateConnectionId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatabaseMigrationServicePrivateConnectionConfig <a name="GoogleDatabaseMigrationServicePrivateConnectionConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnectionConfig;

GoogleDatabaseMigrationServicePrivateConnectionConfig.builder()
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
    .location(java.lang.String)
    .privateConnectionId(java.lang.String)
    .vpcPeeringConfig(GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleDatabaseMigrationServicePrivateConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.privateConnectionId">privateConnectionId</a></code> | <code>java.lang.String</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.vpcPeeringConfig">vpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#id GoogleDatabaseMigrationServicePrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#project GoogleDatabaseMigrationServicePrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#location GoogleDatabaseMigrationServicePrivateConnection#location}

---

##### `privateConnectionId`<sup>Required</sup> <a name="privateConnectionId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.privateConnectionId"></a>

```java
public java.lang.String getPrivateConnectionId();
```

- *Type:* java.lang.String

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#private_connection_id GoogleDatabaseMigrationServicePrivateConnection#private_connection_id}

---

##### `vpcPeeringConfig`<sup>Required</sup> <a name="vpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.vpcPeeringConfig"></a>

```java
public GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig getVpcPeeringConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#vpc_peering_config GoogleDatabaseMigrationServicePrivateConnection#vpc_peering_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#display_name GoogleDatabaseMigrationServicePrivateConnection#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#id GoogleDatabaseMigrationServicePrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#labels GoogleDatabaseMigrationServicePrivateConnection#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#project GoogleDatabaseMigrationServicePrivateConnection#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionConfig.property.timeouts"></a>

```java
public GoogleDatabaseMigrationServicePrivateConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#timeouts GoogleDatabaseMigrationServicePrivateConnection#timeouts}

---

### GoogleDatabaseMigrationServicePrivateConnectionError <a name="GoogleDatabaseMigrationServicePrivateConnectionError" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnectionError;

GoogleDatabaseMigrationServicePrivateConnectionError.builder()
    .build();
```


### GoogleDatabaseMigrationServicePrivateConnectionTimeouts <a name="GoogleDatabaseMigrationServicePrivateConnectionTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts;

GoogleDatabaseMigrationServicePrivateConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#create GoogleDatabaseMigrationServicePrivateConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#delete GoogleDatabaseMigrationServicePrivateConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#update GoogleDatabaseMigrationServicePrivateConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#create GoogleDatabaseMigrationServicePrivateConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#delete GoogleDatabaseMigrationServicePrivateConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#update GoogleDatabaseMigrationServicePrivateConnection#update}.

---

### GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig <a name="GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig;

GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.builder()
    .subnet(java.lang.String)
    .vpcName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.subnet">subnet</a></code> | <code>java.lang.String</code> | A free subnet for peering. (CIDR of /29). |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.vpcName">vpcName</a></code> | <code>java.lang.String</code> | Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}. |

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#subnet GoogleDatabaseMigrationServicePrivateConnection#subnet}

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.vpcName"></a>

```java
public java.lang.String getVpcName();
```

- *Type:* java.lang.String

Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_database_migration_service_private_connection#vpc_name GoogleDatabaseMigrationServicePrivateConnection#vpc_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatabaseMigrationServicePrivateConnectionErrorList <a name="GoogleDatabaseMigrationServicePrivateConnectionErrorList" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnectionErrorList;

new GoogleDatabaseMigrationServicePrivateConnectionErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.get"></a>

```java
public GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference <a name="GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference;

new GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.details">details</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError">GoogleDatabaseMigrationServicePrivateConnectionError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.details"></a>

```java
public StringMap getDetails();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionErrorOutputReference.property.internalValue"></a>

```java
public GoogleDatabaseMigrationServicePrivateConnectionError getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionError">GoogleDatabaseMigrationServicePrivateConnectionError</a>

---


### GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference <a name="GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference;

new GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionTimeouts">GoogleDatabaseMigrationServicePrivateConnectionTimeouts</a>

---


### GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference <a name="GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_database_migration_service_private_connection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference;

new GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput">subnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcNameInput">vpcNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnet">subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcName">vpcName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput"></a>

```java
public java.lang.String getSubnetInput();
```

- *Type:* java.lang.String

---

##### `vpcNameInput`<sup>Optional</sup> <a name="vpcNameInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcNameInput"></a>

```java
public java.lang.String getVpcNameInput();
```

- *Type:* java.lang.String

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

---

##### `vpcName`<sup>Required</sup> <a name="vpcName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcName"></a>

```java
public java.lang.String getVpcName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.internalValue"></a>

```java
public GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServicePrivateConnection.GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig">GoogleDatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---



