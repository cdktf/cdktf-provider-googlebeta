# `googleOracleDatabaseOdbSubnet` Submodule <a name="`googleOracleDatabaseOdbSubnet` Submodule" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseOdbSubnet <a name="GoogleOracleDatabaseOdbSubnet" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet google_oracle_database_odb_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_odb_subnet.GoogleOracleDatabaseOdbSubnet;

GoogleOracleDatabaseOdbSubnet.Builder.create(Construct scope, java.lang.String id)
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
    .cidrRange(java.lang.String)
    .location(java.lang.String)
    .odbnetwork(java.lang.String)
    .odbSubnetId(java.lang.String)
    .purpose(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleOracleDatabaseOdbSubnetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.cidrRange">cidrRange</a></code> | <code>java.lang.String</code> | The CIDR range of the subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.odbnetwork">odbnetwork</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.odbSubnetId">odbSubnetId</a></code> | <code>java.lang.String</code> | The ID of the OdbSubnet to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.purpose">purpose</a></code> | <code>java.lang.String</code> | Purpose of the subnet. Possible values: CLIENT_SUBNET BACKUP_SUBNET. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#id GoogleOracleDatabaseOdbSubnet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#project GoogleOracleDatabaseOdbSubnet#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.cidrRange"></a>

- *Type:* java.lang.String

The CIDR range of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#cidr_range GoogleOracleDatabaseOdbSubnet#cidr_range}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#location GoogleOracleDatabaseOdbSubnet#location}

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.odbnetwork"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#odbnetwork GoogleOracleDatabaseOdbSubnet#odbnetwork}

---

##### `odbSubnetId`<sup>Required</sup> <a name="odbSubnetId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.odbSubnetId"></a>

- *Type:* java.lang.String

The ID of the OdbSubnet to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#odb_subnet_id GoogleOracleDatabaseOdbSubnet#odb_subnet_id}

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.purpose"></a>

- *Type:* java.lang.String

Purpose of the subnet. Possible values: CLIENT_SUBNET BACKUP_SUBNET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#purpose GoogleOracleDatabaseOdbSubnet#purpose}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#deletion_protection GoogleOracleDatabaseOdbSubnet#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#id GoogleOracleDatabaseOdbSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#labels GoogleOracleDatabaseOdbSubnet#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#project GoogleOracleDatabaseOdbSubnet#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#timeouts GoogleOracleDatabaseOdbSubnet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.putTimeouts"></a>

```java
public void putTimeouts(GoogleOracleDatabaseOdbSubnetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOracleDatabaseOdbSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_odb_subnet.GoogleOracleDatabaseOdbSubnet;

GoogleOracleDatabaseOdbSubnet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_odb_subnet.GoogleOracleDatabaseOdbSubnet;

GoogleOracleDatabaseOdbSubnet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_odb_subnet.GoogleOracleDatabaseOdbSubnet;

GoogleOracleDatabaseOdbSubnet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_odb_subnet.GoogleOracleDatabaseOdbSubnet;

GoogleOracleDatabaseOdbSubnet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleOracleDatabaseOdbSubnet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleOracleDatabaseOdbSubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleOracleDatabaseOdbSubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleOracleDatabaseOdbSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseOdbSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference">GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cidrRangeInput">cidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbnetworkInput">odbnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbSubnetIdInput">odbSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.purposeInput">purposeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cidrRange">cidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbnetwork">odbnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbSubnetId">odbSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.purpose">purpose</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.timeouts"></a>

```java
public GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference">GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference</a>

---

##### `cidrRangeInput`<sup>Optional</sup> <a name="cidrRangeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cidrRangeInput"></a>

```java
public java.lang.String getCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `odbnetworkInput`<sup>Optional</sup> <a name="odbnetworkInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbnetworkInput"></a>

```java
public java.lang.String getOdbnetworkInput();
```

- *Type:* java.lang.String

---

##### `odbSubnetIdInput`<sup>Optional</sup> <a name="odbSubnetIdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbSubnetIdInput"></a>

```java
public java.lang.String getOdbSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.purposeInput"></a>

```java
public java.lang.String getPurposeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a>

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.cidrRange"></a>

```java
public java.lang.String getCidrRange();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbnetwork"></a>

```java
public java.lang.String getOdbnetwork();
```

- *Type:* java.lang.String

---

##### `odbSubnetId`<sup>Required</sup> <a name="odbSubnetId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.odbSubnetId"></a>

```java
public java.lang.String getOdbSubnetId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseOdbSubnetConfig <a name="GoogleOracleDatabaseOdbSubnetConfig" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_odb_subnet.GoogleOracleDatabaseOdbSubnetConfig;

GoogleOracleDatabaseOdbSubnetConfig.builder()
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
    .cidrRange(java.lang.String)
    .location(java.lang.String)
    .odbnetwork(java.lang.String)
    .odbSubnetId(java.lang.String)
    .purpose(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleOracleDatabaseOdbSubnetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.cidrRange">cidrRange</a></code> | <code>java.lang.String</code> | The CIDR range of the subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.odbnetwork">odbnetwork</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.odbSubnetId">odbSubnetId</a></code> | <code>java.lang.String</code> | The ID of the OdbSubnet to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.purpose">purpose</a></code> | <code>java.lang.String</code> | Purpose of the subnet. Possible values: CLIENT_SUBNET BACKUP_SUBNET. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#id GoogleOracleDatabaseOdbSubnet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#project GoogleOracleDatabaseOdbSubnet#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.cidrRange"></a>

```java
public java.lang.String getCidrRange();
```

- *Type:* java.lang.String

The CIDR range of the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#cidr_range GoogleOracleDatabaseOdbSubnet#cidr_range}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#location GoogleOracleDatabaseOdbSubnet#location}

---

##### `odbnetwork`<sup>Required</sup> <a name="odbnetwork" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.odbnetwork"></a>

```java
public java.lang.String getOdbnetwork();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#odbnetwork GoogleOracleDatabaseOdbSubnet#odbnetwork}

---

##### `odbSubnetId`<sup>Required</sup> <a name="odbSubnetId" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.odbSubnetId"></a>

```java
public java.lang.String getOdbSubnetId();
```

- *Type:* java.lang.String

The ID of the OdbSubnet to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#odb_subnet_id GoogleOracleDatabaseOdbSubnet#odb_subnet_id}

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

Purpose of the subnet. Possible values: CLIENT_SUBNET BACKUP_SUBNET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#purpose GoogleOracleDatabaseOdbSubnet#purpose}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#deletion_protection GoogleOracleDatabaseOdbSubnet#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#id GoogleOracleDatabaseOdbSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#labels GoogleOracleDatabaseOdbSubnet#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#project GoogleOracleDatabaseOdbSubnet#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetConfig.property.timeouts"></a>

```java
public GoogleOracleDatabaseOdbSubnetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#timeouts GoogleOracleDatabaseOdbSubnet#timeouts}

---

### GoogleOracleDatabaseOdbSubnetTimeouts <a name="GoogleOracleDatabaseOdbSubnetTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_odb_subnet.GoogleOracleDatabaseOdbSubnetTimeouts;

GoogleOracleDatabaseOdbSubnetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#create GoogleOracleDatabaseOdbSubnet#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#delete GoogleOracleDatabaseOdbSubnet#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#update GoogleOracleDatabaseOdbSubnet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#create GoogleOracleDatabaseOdbSubnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#delete GoogleOracleDatabaseOdbSubnet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_oracle_database_odb_subnet#update GoogleOracleDatabaseOdbSubnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference <a name="GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_odb_subnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference;

new GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOracleDatabaseOdbSubnet.GoogleOracleDatabaseOdbSubnetTimeouts">GoogleOracleDatabaseOdbSubnetTimeouts</a>

---



