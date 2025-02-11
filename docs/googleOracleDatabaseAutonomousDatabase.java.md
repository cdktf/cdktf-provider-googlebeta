# `googleOracleDatabaseAutonomousDatabase` Submodule <a name="`googleOracleDatabaseAutonomousDatabase` Submodule" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseAutonomousDatabase <a name="GoogleOracleDatabaseAutonomousDatabase" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database google_oracle_database_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabase;

GoogleOracleDatabaseAutonomousDatabase.Builder.create(Construct scope, java.lang.String id)
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
    .autonomousDatabaseId(java.lang.String)
    .cidr(java.lang.String)
    .database(java.lang.String)
    .location(java.lang.String)
    .network(java.lang.String)
    .properties(GoogleOracleDatabaseAutonomousDatabaseProperties)
//  .adminPassword(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleOracleDatabaseAutonomousDatabaseTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | The ID of the Autonomous Database to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.cidr">cidr</a></code> | <code>java.lang.String</code> | The subnet CIDR range for the Autonmous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The name of the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The name of the VPC network used by the Autonomous Database. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | The password for the default ADMIN user. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the Autonomous Database. The name does not have to be unique within your project. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#id GoogleOracleDatabaseAutonomousDatabase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#project GoogleOracleDatabaseAutonomousDatabase#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* java.lang.String

The ID of the Autonomous Database to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#autonomous_database_id GoogleOracleDatabaseAutonomousDatabase#autonomous_database_id}

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.cidr"></a>

- *Type:* java.lang.String

The subnet CIDR range for the Autonmous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#cidr GoogleOracleDatabaseAutonomousDatabase#cidr}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The name of the Autonomous Database.

The database name must be unique in
the project. The name must begin with a letter and can
contain a maximum of 30 alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#database GoogleOracleDatabaseAutonomousDatabase#database}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#location GoogleOracleDatabaseAutonomousDatabase#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The name of the VPC network used by the Autonomous Database. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#network GoogleOracleDatabaseAutonomousDatabase#network}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#properties GoogleOracleDatabaseAutonomousDatabase#properties}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.adminPassword"></a>

- *Type:* java.lang.String

The password for the default ADMIN user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#admin_password GoogleOracleDatabaseAutonomousDatabase#admin_password}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#deletion_protection GoogleOracleDatabaseAutonomousDatabase#deletion_protection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the Autonomous Database. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#display_name GoogleOracleDatabaseAutonomousDatabase#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#id GoogleOracleDatabaseAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the Autonomous Database.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#labels GoogleOracleDatabaseAutonomousDatabase#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#project GoogleOracleDatabaseAutonomousDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#timeouts GoogleOracleDatabaseAutonomousDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.putProperties"></a>

```java
public void putProperties(GoogleOracleDatabaseAutonomousDatabaseProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.putTimeouts"></a>

```java
public void putTimeouts(GoogleOracleDatabaseAutonomousDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabase;

GoogleOracleDatabaseAutonomousDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabase;

GoogleOracleDatabaseAutonomousDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabase;

GoogleOracleDatabaseAutonomousDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabase;

GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleOracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleOracleDatabaseAutonomousDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleOracleDatabaseAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference">GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference">GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.properties"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference">GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.timeouts"></a>

```java
public GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference">GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput"></a>

```java
public java.lang.String getAutonomousDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.propertiesInput"></a>

```java
public GoogleOracleDatabaseAutonomousDatabaseProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseAutonomousDatabaseConfig <a name="GoogleOracleDatabaseAutonomousDatabaseConfig" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabaseConfig;

GoogleOracleDatabaseAutonomousDatabaseConfig.builder()
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
    .autonomousDatabaseId(java.lang.String)
    .cidr(java.lang.String)
    .database(java.lang.String)
    .location(java.lang.String)
    .network(java.lang.String)
    .properties(GoogleOracleDatabaseAutonomousDatabaseProperties)
//  .adminPassword(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleOracleDatabaseAutonomousDatabaseTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | The ID of the Autonomous Database to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.cidr">cidr</a></code> | <code>java.lang.String</code> | The subnet CIDR range for the Autonmous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.database">database</a></code> | <code>java.lang.String</code> | The name of the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.network">network</a></code> | <code>java.lang.String</code> | The name of the VPC network used by the Autonomous Database. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | The password for the default ADMIN user. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the Autonomous Database. The name does not have to be unique within your project. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#id GoogleOracleDatabaseAutonomousDatabase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#project GoogleOracleDatabaseAutonomousDatabase#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

The ID of the Autonomous Database to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#autonomous_database_id GoogleOracleDatabaseAutonomousDatabase#autonomous_database_id}

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

The subnet CIDR range for the Autonmous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#cidr GoogleOracleDatabaseAutonomousDatabase#cidr}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The name of the Autonomous Database.

The database name must be unique in
the project. The name must begin with a letter and can
contain a maximum of 30 alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#database GoogleOracleDatabaseAutonomousDatabase#database}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#location GoogleOracleDatabaseAutonomousDatabase#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name of the VPC network used by the Autonomous Database. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#network GoogleOracleDatabaseAutonomousDatabase#network}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.properties"></a>

```java
public GoogleOracleDatabaseAutonomousDatabaseProperties getProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#properties GoogleOracleDatabaseAutonomousDatabase#properties}

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

The password for the default ADMIN user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#admin_password GoogleOracleDatabaseAutonomousDatabase#admin_password}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#deletion_protection GoogleOracleDatabaseAutonomousDatabase#deletion_protection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the Autonomous Database. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#display_name GoogleOracleDatabaseAutonomousDatabase#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#id GoogleOracleDatabaseAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the Autonomous Database.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#labels GoogleOracleDatabaseAutonomousDatabase#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#project GoogleOracleDatabaseAutonomousDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseConfig.property.timeouts"></a>

```java
public GoogleOracleDatabaseAutonomousDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#timeouts GoogleOracleDatabaseAutonomousDatabase#timeouts}

---

### GoogleOracleDatabaseAutonomousDatabaseProperties <a name="GoogleOracleDatabaseAutonomousDatabaseProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabaseProperties;

GoogleOracleDatabaseAutonomousDatabaseProperties.builder()
    .dbWorkload(java.lang.String)
    .licenseType(java.lang.String)
//  .backupRetentionPeriodDays(java.lang.Number)
//  .characterSet(java.lang.String)
//  .computeCount(java.lang.Number)
//  .customerContacts(IResolvable)
//  .customerContacts(java.util.List<GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts>)
//  .dataStorageSizeGb(java.lang.Number)
//  .dataStorageSizeTb(java.lang.Number)
//  .dbEdition(java.lang.String)
//  .dbVersion(java.lang.String)
//  .isAutoScalingEnabled(java.lang.Boolean)
//  .isAutoScalingEnabled(IResolvable)
//  .isStorageAutoScalingEnabled(java.lang.Boolean)
//  .isStorageAutoScalingEnabled(IResolvable)
//  .maintenanceScheduleType(java.lang.String)
//  .mtlsConnectionRequired(java.lang.Boolean)
//  .mtlsConnectionRequired(IResolvable)
//  .nCharacterSet(java.lang.String)
//  .operationsInsightsState(java.lang.String)
//  .privateEndpointIp(java.lang.String)
//  .privateEndpointLabel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | Possible values:  DB_WORKLOAD_UNSPECIFIED OLTP DW AJD APEX. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | The license type used for the Autonomous Database.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.backupRetentionPeriodDays">backupRetentionPeriodDays</a></code> | <code>java.lang.Number</code> | The retention period for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | The character set for the Autonomous Database. The default is AL32UTF8. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | The number of compute servers for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.customerContacts">customerContacts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>></code> | customer_contacts block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeGb">dataStorageSizeGb</a></code> | <code>java.lang.Number</code> | The size of the data stored in the database, in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>java.lang.Number</code> | The size of the data stored in the database, in terabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dbEdition">dbEdition</a></code> | <code>java.lang.String</code> | The edition of the Autonomous Databases.   Possible values:  DATABASE_EDITION_UNSPECIFIED STANDARD_EDITION ENTERPRISE_EDITION. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | The Oracle Database version for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field indicates if auto scaling is enabled for the Autonomous Database CPU core count. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.isStorageAutoScalingEnabled">isStorageAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field indicates if auto scaling is enabled for the Autonomous Database storage. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.maintenanceScheduleType">maintenanceScheduleType</a></code> | <code>java.lang.String</code> | The maintenance schedule of the Autonomous Database.   Possible values:  MAINTENANCE_SCHEDULE_TYPE_UNSPECIFIED EARLY REGULAR. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field specifies if the Autonomous Database requires mTLS connections. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.nCharacterSet">nCharacterSet</a></code> | <code>java.lang.String</code> | The national character set for the Autonomous Database. The default is AL16UTF16. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.operationsInsightsState">operationsInsightsState</a></code> | <code>java.lang.String</code> | Possible values:  OPERATIONS_INSIGHTS_STATE_UNSPECIFIED ENABLING ENABLED DISABLING NOT_ENABLED FAILED_ENABLING FAILED_DISABLING. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | The private endpoint IP address for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>java.lang.String</code> | The private endpoint label for the Autonomous Database. |

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

Possible values:  DB_WORKLOAD_UNSPECIFIED OLTP DW AJD APEX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#db_workload GoogleOracleDatabaseAutonomousDatabase#db_workload}

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

The license type used for the Autonomous Database.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#license_type GoogleOracleDatabaseAutonomousDatabase#license_type}

---

##### `backupRetentionPeriodDays`<sup>Optional</sup> <a name="backupRetentionPeriodDays" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.backupRetentionPeriodDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodDays();
```

- *Type:* java.lang.Number

The retention period for the Autonomous Database.

This field is specified
in days, can range from 1 day to 60 days, and has a default value of
60 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#backup_retention_period_days GoogleOracleDatabaseAutonomousDatabase#backup_retention_period_days}

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

The character set for the Autonomous Database. The default is AL32UTF8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#character_set GoogleOracleDatabaseAutonomousDatabase#character_set}

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

The number of compute servers for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#compute_count GoogleOracleDatabaseAutonomousDatabase#compute_count}

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.customerContacts"></a>

```java
public java.lang.Object getCustomerContacts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>>

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#customer_contacts GoogleOracleDatabaseAutonomousDatabase#customer_contacts}

---

##### `dataStorageSizeGb`<sup>Optional</sup> <a name="dataStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeGb"></a>

```java
public java.lang.Number getDataStorageSizeGb();
```

- *Type:* java.lang.Number

The size of the data stored in the database, in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#data_storage_size_gb GoogleOracleDatabaseAutonomousDatabase#data_storage_size_gb}

---

##### `dataStorageSizeTb`<sup>Optional</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeTb"></a>

```java
public java.lang.Number getDataStorageSizeTb();
```

- *Type:* java.lang.Number

The size of the data stored in the database, in terabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#data_storage_size_tb GoogleOracleDatabaseAutonomousDatabase#data_storage_size_tb}

---

##### `dbEdition`<sup>Optional</sup> <a name="dbEdition" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dbEdition"></a>

```java
public java.lang.String getDbEdition();
```

- *Type:* java.lang.String

The edition of the Autonomous Databases.   Possible values:  DATABASE_EDITION_UNSPECIFIED STANDARD_EDITION ENTERPRISE_EDITION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#db_edition GoogleOracleDatabaseAutonomousDatabase#db_edition}

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

The Oracle Database version for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#db_version GoogleOracleDatabaseAutonomousDatabase#db_version}

---

##### `isAutoScalingEnabled`<sup>Optional</sup> <a name="isAutoScalingEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.isAutoScalingEnabled"></a>

```java
public java.lang.Object getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field indicates if auto scaling is enabled for the Autonomous Database CPU core count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#is_auto_scaling_enabled GoogleOracleDatabaseAutonomousDatabase#is_auto_scaling_enabled}

---

##### `isStorageAutoScalingEnabled`<sup>Optional</sup> <a name="isStorageAutoScalingEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.isStorageAutoScalingEnabled"></a>

```java
public java.lang.Object getIsStorageAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field indicates if auto scaling is enabled for the Autonomous Database storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#is_storage_auto_scaling_enabled GoogleOracleDatabaseAutonomousDatabase#is_storage_auto_scaling_enabled}

---

##### `maintenanceScheduleType`<sup>Optional</sup> <a name="maintenanceScheduleType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.maintenanceScheduleType"></a>

```java
public java.lang.String getMaintenanceScheduleType();
```

- *Type:* java.lang.String

The maintenance schedule of the Autonomous Database.   Possible values:  MAINTENANCE_SCHEDULE_TYPE_UNSPECIFIED EARLY REGULAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#maintenance_schedule_type GoogleOracleDatabaseAutonomousDatabase#maintenance_schedule_type}

---

##### `mtlsConnectionRequired`<sup>Optional</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.mtlsConnectionRequired"></a>

```java
public java.lang.Object getMtlsConnectionRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field specifies if the Autonomous Database requires mTLS connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#mtls_connection_required GoogleOracleDatabaseAutonomousDatabase#mtls_connection_required}

---

##### `nCharacterSet`<sup>Optional</sup> <a name="nCharacterSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.nCharacterSet"></a>

```java
public java.lang.String getNCharacterSet();
```

- *Type:* java.lang.String

The national character set for the Autonomous Database. The default is AL16UTF16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#n_character_set GoogleOracleDatabaseAutonomousDatabase#n_character_set}

---

##### `operationsInsightsState`<sup>Optional</sup> <a name="operationsInsightsState" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.operationsInsightsState"></a>

```java
public java.lang.String getOperationsInsightsState();
```

- *Type:* java.lang.String

Possible values:  OPERATIONS_INSIGHTS_STATE_UNSPECIFIED ENABLING ENABLED DISABLING NOT_ENABLED FAILED_ENABLING FAILED_DISABLING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#operations_insights_state GoogleOracleDatabaseAutonomousDatabase#operations_insights_state}

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

The private endpoint IP address for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#private_endpoint_ip GoogleOracleDatabaseAutonomousDatabase#private_endpoint_ip}

---

##### `privateEndpointLabel`<sup>Optional</sup> <a name="privateEndpointLabel" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties.property.privateEndpointLabel"></a>

```java
public java.lang.String getPrivateEndpointLabel();
```

- *Type:* java.lang.String

The private endpoint label for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#private_endpoint_label GoogleOracleDatabaseAutonomousDatabase#private_endpoint_label}

---

### GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails;

GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails.builder()
    .build();
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings;

GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings.builder()
    .build();
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings;

GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings.builder()
    .build();
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles;

GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles.builder()
    .build();
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls;

GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls.builder()
    .build();
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts;

GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts.builder()
    .email(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts.property.email">email</a></code> | <code>java.lang.String</code> | The email address used by Oracle to send notifications regarding databases and infrastructure. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The email address used by Oracle to send notifications regarding databases and infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#email GoogleOracleDatabaseAutonomousDatabase#email}

---

### GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb;

GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb.builder()
    .build();
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails;

GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails.builder()
    .build();
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime;

GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime.builder()
    .build();
```


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime;

GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime.builder()
    .build();
```


### GoogleOracleDatabaseAutonomousDatabaseTimeouts <a name="GoogleOracleDatabaseAutonomousDatabaseTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabaseTimeouts;

GoogleOracleDatabaseAutonomousDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#create GoogleOracleDatabaseAutonomousDatabase#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#delete GoogleOracleDatabaseAutonomousDatabase#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#update GoogleOracleDatabaseAutonomousDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#create GoogleOracleDatabaseAutonomousDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#delete GoogleOracleDatabaseAutonomousDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_autonomous_database#update GoogleOracleDatabaseAutonomousDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList;

new GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference;

new GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.apexVersion">apexVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.ordsVersion">ordsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails">GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apexVersion`<sup>Required</sup> <a name="apexVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.apexVersion"></a>

```java
public java.lang.String getApexVersion();
```

- *Type:* java.lang.String

---

##### `ordsVersion`<sup>Required</sup> <a name="ordsVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.ordsVersion"></a>

```java
public java.lang.String getOrdsVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails">GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetails</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList;

new GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference;

new GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.high">high</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.low">low</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium">medium</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.high"></a>

```java
public java.lang.String getHigh();
```

- *Type:* java.lang.String

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.low"></a>

```java
public java.lang.String getLow();
```

- *Type:* java.lang.String

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList;

new GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference;

new GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.dedicated">dedicated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.high">high</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.low">low</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.medium">medium</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.profiles">profiles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList getAllConnectionStrings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList</a>

---

##### `dedicated`<sup>Required</sup> <a name="dedicated" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.dedicated"></a>

```java
public java.lang.String getDedicated();
```

- *Type:* java.lang.String

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.high"></a>

```java
public java.lang.String getHigh();
```

- *Type:* java.lang.String

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.low"></a>

```java
public java.lang.String getLow();
```

- *Type:* java.lang.String

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.profiles"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList getProfiles();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStrings</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList;

new GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference;

new GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.consumerGroup">consumerGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.hostFormat">hostFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.isRegional">isRegional</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.sessionMode">sessionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat">syntaxFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication">tlsAuthentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```java
public java.lang.String getConsumerGroup();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `hostFormat`<sup>Required</sup> <a name="hostFormat" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```java
public java.lang.String getHostFormat();
```

- *Type:* java.lang.String

---

##### `isRegional`<sup>Required</sup> <a name="isRegional" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.isRegional"></a>

```java
public IResolvable getIsRegional();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```java
public java.lang.String getSessionMode();
```

- *Type:* java.lang.String

---

##### `syntaxFormat`<sup>Required</sup> <a name="syntaxFormat" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```java
public java.lang.String getSyntaxFormat();
```

- *Type:* java.lang.String

---

##### `tlsAuthentication`<sup>Required</sup> <a name="tlsAuthentication" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```java
public java.lang.String getTlsAuthentication();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList;

new GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference;

new GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.apexUri">apexUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.databaseTransformsUri">databaseTransformsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.graphStudioUri">graphStudioUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri">machineLearningNotebookUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri">machineLearningUserManagementUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.mongoDbUri">mongoDbUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.ordsUri">ordsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.sqlDevWebUri">sqlDevWebUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apexUri`<sup>Required</sup> <a name="apexUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.apexUri"></a>

```java
public java.lang.String getApexUri();
```

- *Type:* java.lang.String

---

##### `databaseTransformsUri`<sup>Required</sup> <a name="databaseTransformsUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.databaseTransformsUri"></a>

```java
public java.lang.String getDatabaseTransformsUri();
```

- *Type:* java.lang.String

---

##### `graphStudioUri`<sup>Required</sup> <a name="graphStudioUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.graphStudioUri"></a>

```java
public java.lang.String getGraphStudioUri();
```

- *Type:* java.lang.String

---

##### `machineLearningNotebookUri`<sup>Required</sup> <a name="machineLearningNotebookUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri"></a>

```java
public java.lang.String getMachineLearningNotebookUri();
```

- *Type:* java.lang.String

---

##### `machineLearningUserManagementUri`<sup>Required</sup> <a name="machineLearningUserManagementUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri"></a>

```java
public java.lang.String getMachineLearningUserManagementUri();
```

- *Type:* java.lang.String

---

##### `mongoDbUri`<sup>Required</sup> <a name="mongoDbUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.mongoDbUri"></a>

```java
public java.lang.String getMongoDbUri();
```

- *Type:* java.lang.String

---

##### `ordsUri`<sup>Required</sup> <a name="ordsUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.ordsUri"></a>

```java
public java.lang.String getOrdsUri();
```

- *Type:* java.lang.String

---

##### `sqlDevWebUri`<sup>Required</sup> <a name="sqlDevWebUri" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.sqlDevWebUri"></a>

```java
public java.lang.String getSqlDevWebUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrls</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList;

new GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference;

new GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList;

new GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference;

new GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime">dataGuardRoleChangedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime">disasterRecoveryRoleChangedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lagTimeDuration">lagTimeDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb">GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataGuardRoleChangedTime`<sup>Required</sup> <a name="dataGuardRoleChangedTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime"></a>

```java
public java.lang.String getDataGuardRoleChangedTime();
```

- *Type:* java.lang.String

---

##### `disasterRecoveryRoleChangedTime`<sup>Required</sup> <a name="disasterRecoveryRoleChangedTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime"></a>

```java
public java.lang.String getDisasterRecoveryRoleChangedTime();
```

- *Type:* java.lang.String

---

##### `lagTimeDuration`<sup>Required</sup> <a name="lagTimeDuration" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lagTimeDuration"></a>

```java
public java.lang.String getLagTimeDuration();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb">GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference;

new GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.putCustomerContacts">putCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetBackupRetentionPeriodDays">resetBackupRetentionPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCharacterSet">resetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeGb">resetDataStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeTb">resetDataStorageSizeTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbEdition">resetDbEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsAutoScalingEnabled">resetIsAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsStorageAutoScalingEnabled">resetIsStorageAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMaintenanceScheduleType">resetMaintenanceScheduleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMtlsConnectionRequired">resetMtlsConnectionRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetNCharacterSet">resetNCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetOperationsInsightsState">resetOperationsInsightsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointIp">resetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointLabel">resetPrivateEndpointLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerContacts` <a name="putCustomerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.putCustomerContacts"></a>

```java
public void putCustomerContacts(IResolvable OR java.util.List<GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.putCustomerContacts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>>

---

##### `resetBackupRetentionPeriodDays` <a name="resetBackupRetentionPeriodDays" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetBackupRetentionPeriodDays"></a>

```java
public void resetBackupRetentionPeriodDays()
```

##### `resetCharacterSet` <a name="resetCharacterSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCharacterSet"></a>

```java
public void resetCharacterSet()
```

##### `resetComputeCount` <a name="resetComputeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetComputeCount"></a>

```java
public void resetComputeCount()
```

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCustomerContacts"></a>

```java
public void resetCustomerContacts()
```

##### `resetDataStorageSizeGb` <a name="resetDataStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeGb"></a>

```java
public void resetDataStorageSizeGb()
```

##### `resetDataStorageSizeTb` <a name="resetDataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeTb"></a>

```java
public void resetDataStorageSizeTb()
```

##### `resetDbEdition` <a name="resetDbEdition" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbEdition"></a>

```java
public void resetDbEdition()
```

##### `resetDbVersion` <a name="resetDbVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbVersion"></a>

```java
public void resetDbVersion()
```

##### `resetIsAutoScalingEnabled` <a name="resetIsAutoScalingEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsAutoScalingEnabled"></a>

```java
public void resetIsAutoScalingEnabled()
```

##### `resetIsStorageAutoScalingEnabled` <a name="resetIsStorageAutoScalingEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsStorageAutoScalingEnabled"></a>

```java
public void resetIsStorageAutoScalingEnabled()
```

##### `resetMaintenanceScheduleType` <a name="resetMaintenanceScheduleType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMaintenanceScheduleType"></a>

```java
public void resetMaintenanceScheduleType()
```

##### `resetMtlsConnectionRequired` <a name="resetMtlsConnectionRequired" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMtlsConnectionRequired"></a>

```java
public void resetMtlsConnectionRequired()
```

##### `resetNCharacterSet` <a name="resetNCharacterSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetNCharacterSet"></a>

```java
public void resetNCharacterSet()
```

##### `resetOperationsInsightsState` <a name="resetOperationsInsightsState" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetOperationsInsightsState"></a>

```java
public void resetOperationsInsightsState()
```

##### `resetPrivateEndpointIp` <a name="resetPrivateEndpointIp" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointIp"></a>

```java
public void resetPrivateEndpointIp()
```

##### `resetPrivateEndpointLabel` <a name="resetPrivateEndpointLabel" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointLabel"></a>

```java
public void resetPrivateEndpointLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.actualUsedDataStorageSizeTb">actualUsedDataStorageSizeTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.allocatedStorageSizeTb">allocatedStorageSizeTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.apexDetails">apexDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList">GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed">arePrimaryAllowlistedIpsUsed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionStrings">connectionStrings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionUrls">connectionUrls</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContacts">customerContacts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.databaseManagementState">databaseManagementState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataSafeState">dataSafeState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.failedDataRecoveryDuration">failedDataRecoveryDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localDisasterRecoveryType">localDisasterRecoveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localStandbyDb">localStandbyDb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList">GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceBeginTime">maintenanceBeginTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceEndTime">maintenanceEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryPerOracleComputeUnitGbs">memoryPerOracleComputeUnitGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryTableGbs">memoryTableGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nextLongTermBackupTime">nextLongTermBackupTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.openMode">openMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.peerDbIds">peerDbIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.permissionLevel">permissionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableMode">refreshableMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableState">refreshableState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.scheduledOperationDetails">scheduledOperationDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.sqlWebDeveloperUrl">sqlWebDeveloperUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.supportedCloneRegions">supportedCloneRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.totalAutoBackupStorageSizeGbs">totalAutoBackupStorageSizeGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.usedDataStorageSizeTbs">usedDataStorageSizeTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDaysInput">backupRetentionPeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSetInput">characterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContactsInput">customerContactsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGbInput">dataStorageSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTbInput">dataStorageSizeTbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEditionInput">dbEditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersionInput">dbVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkloadInput">dbWorkloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabledInput">isStorageAutoScalingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseTypeInput">licenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleTypeInput">maintenanceScheduleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequiredInput">mtlsConnectionRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSetInput">nCharacterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsStateInput">operationsInsightsStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIpInput">privateEndpointIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabelInput">privateEndpointLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDays">backupRetentionPeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGb">dataStorageSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTb">dataStorageSizeTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEdition">dbEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkload">dbWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabled">isStorageAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleType">maintenanceScheduleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSet">nCharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsState">operationsInsightsState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actualUsedDataStorageSizeTb`<sup>Required</sup> <a name="actualUsedDataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.actualUsedDataStorageSizeTb"></a>

```java
public java.lang.Number getActualUsedDataStorageSizeTb();
```

- *Type:* java.lang.Number

---

##### `allocatedStorageSizeTb`<sup>Required</sup> <a name="allocatedStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.allocatedStorageSizeTb"></a>

```java
public java.lang.Number getAllocatedStorageSizeTb();
```

- *Type:* java.lang.Number

---

##### `apexDetails`<sup>Required</sup> <a name="apexDetails" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.apexDetails"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList getApexDetails();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList">GoogleOracleDatabaseAutonomousDatabasePropertiesApexDetailsList</a>

---

##### `arePrimaryAllowlistedIpsUsed`<sup>Required</sup> <a name="arePrimaryAllowlistedIpsUsed" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed"></a>

```java
public IResolvable getArePrimaryAllowlistedIpsUsed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.autonomousContainerDatabaseId"></a>

```java
public java.lang.String getAutonomousContainerDatabaseId();
```

- *Type:* java.lang.String

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.availableUpgradeVersions"></a>

```java
public java.util.List<java.lang.String> getAvailableUpgradeVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionStrings"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList getConnectionStrings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionStringsList</a>

---

##### `connectionUrls`<sup>Required</sup> <a name="connectionUrls" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionUrls"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList getConnectionUrls();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList">GoogleOracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList</a>

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContacts"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList getCustomerContacts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContactsList</a>

---

##### `databaseManagementState`<sup>Required</sup> <a name="databaseManagementState" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.databaseManagementState"></a>

```java
public java.lang.String getDatabaseManagementState();
```

- *Type:* java.lang.String

---

##### `dataSafeState`<sup>Required</sup> <a name="dataSafeState" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataSafeState"></a>

```java
public java.lang.String getDataSafeState();
```

- *Type:* java.lang.String

---

##### `failedDataRecoveryDuration`<sup>Required</sup> <a name="failedDataRecoveryDuration" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.failedDataRecoveryDuration"></a>

```java
public java.lang.String getFailedDataRecoveryDuration();
```

- *Type:* java.lang.String

---

##### `isLocalDataGuardEnabled`<sup>Required</sup> <a name="isLocalDataGuardEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isLocalDataGuardEnabled"></a>

```java
public IResolvable getIsLocalDataGuardEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```java
public java.lang.Number getLocalAdgAutoFailoverMaxDataLossLimit();
```

- *Type:* java.lang.Number

---

##### `localDisasterRecoveryType`<sup>Required</sup> <a name="localDisasterRecoveryType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localDisasterRecoveryType"></a>

```java
public java.lang.String getLocalDisasterRecoveryType();
```

- *Type:* java.lang.String

---

##### `localStandbyDb`<sup>Required</sup> <a name="localStandbyDb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localStandbyDb"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList getLocalStandbyDb();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList">GoogleOracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList</a>

---

##### `maintenanceBeginTime`<sup>Required</sup> <a name="maintenanceBeginTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceBeginTime"></a>

```java
public java.lang.String getMaintenanceBeginTime();
```

- *Type:* java.lang.String

---

##### `maintenanceEndTime`<sup>Required</sup> <a name="maintenanceEndTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceEndTime"></a>

```java
public java.lang.String getMaintenanceEndTime();
```

- *Type:* java.lang.String

---

##### `memoryPerOracleComputeUnitGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitGbs" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryPerOracleComputeUnitGbs"></a>

```java
public java.lang.Number getMemoryPerOracleComputeUnitGbs();
```

- *Type:* java.lang.Number

---

##### `memoryTableGbs`<sup>Required</sup> <a name="memoryTableGbs" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryTableGbs"></a>

```java
public java.lang.Number getMemoryTableGbs();
```

- *Type:* java.lang.Number

---

##### `nextLongTermBackupTime`<sup>Required</sup> <a name="nextLongTermBackupTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nextLongTermBackupTime"></a>

```java
public java.lang.String getNextLongTermBackupTime();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ociUrl"></a>

```java
public java.lang.String getOciUrl();
```

- *Type:* java.lang.String

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.openMode"></a>

```java
public java.lang.String getOpenMode();
```

- *Type:* java.lang.String

---

##### `peerDbIds`<sup>Required</sup> <a name="peerDbIds" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.peerDbIds"></a>

```java
public java.util.List<java.lang.String> getPeerDbIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.permissionLevel"></a>

```java
public java.lang.String getPermissionLevel();
```

- *Type:* java.lang.String

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpoint"></a>

```java
public java.lang.String getPrivateEndpoint();
```

- *Type:* java.lang.String

---

##### `refreshableMode`<sup>Required</sup> <a name="refreshableMode" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableMode"></a>

```java
public java.lang.String getRefreshableMode();
```

- *Type:* java.lang.String

---

##### `refreshableState`<sup>Required</sup> <a name="refreshableState" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableState"></a>

```java
public java.lang.String getRefreshableState();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `scheduledOperationDetails`<sup>Required</sup> <a name="scheduledOperationDetails" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.scheduledOperationDetails"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList getScheduledOperationDetails();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList</a>

---

##### `sqlWebDeveloperUrl`<sup>Required</sup> <a name="sqlWebDeveloperUrl" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.sqlWebDeveloperUrl"></a>

```java
public java.lang.String getSqlWebDeveloperUrl();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `supportedCloneRegions`<sup>Required</sup> <a name="supportedCloneRegions" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.supportedCloneRegions"></a>

```java
public java.util.List<java.lang.String> getSupportedCloneRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `totalAutoBackupStorageSizeGbs`<sup>Required</sup> <a name="totalAutoBackupStorageSizeGbs" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.totalAutoBackupStorageSizeGbs"></a>

```java
public java.lang.Number getTotalAutoBackupStorageSizeGbs();
```

- *Type:* java.lang.Number

---

##### `usedDataStorageSizeTbs`<sup>Required</sup> <a name="usedDataStorageSizeTbs" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.usedDataStorageSizeTbs"></a>

```java
public java.lang.Number getUsedDataStorageSizeTbs();
```

- *Type:* java.lang.Number

---

##### `backupRetentionPeriodDaysInput`<sup>Optional</sup> <a name="backupRetentionPeriodDaysInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDaysInput"></a>

```java
public java.lang.Number getBackupRetentionPeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSetInput"></a>

```java
public java.lang.String getCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContactsInput"></a>

```java
public java.lang.Object getCustomerContactsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts">GoogleOracleDatabaseAutonomousDatabasePropertiesCustomerContacts</a>>

---

##### `dataStorageSizeGbInput`<sup>Optional</sup> <a name="dataStorageSizeGbInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGbInput"></a>

```java
public java.lang.Number getDataStorageSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeTbInput`<sup>Optional</sup> <a name="dataStorageSizeTbInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTbInput"></a>

```java
public java.lang.Number getDataStorageSizeTbInput();
```

- *Type:* java.lang.Number

---

##### `dbEditionInput`<sup>Optional</sup> <a name="dbEditionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEditionInput"></a>

```java
public java.lang.String getDbEditionInput();
```

- *Type:* java.lang.String

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersionInput"></a>

```java
public java.lang.String getDbVersionInput();
```

- *Type:* java.lang.String

---

##### `dbWorkloadInput`<sup>Optional</sup> <a name="dbWorkloadInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkloadInput"></a>

```java
public java.lang.String getDbWorkloadInput();
```

- *Type:* java.lang.String

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabledInput"></a>

```java
public java.lang.Object getIsAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isStorageAutoScalingEnabledInput`<sup>Optional</sup> <a name="isStorageAutoScalingEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabledInput"></a>

```java
public java.lang.Object getIsStorageAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseTypeInput"></a>

```java
public java.lang.String getLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `maintenanceScheduleTypeInput`<sup>Optional</sup> <a name="maintenanceScheduleTypeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleTypeInput"></a>

```java
public java.lang.String getMaintenanceScheduleTypeInput();
```

- *Type:* java.lang.String

---

##### `mtlsConnectionRequiredInput`<sup>Optional</sup> <a name="mtlsConnectionRequiredInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequiredInput"></a>

```java
public java.lang.Object getMtlsConnectionRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nCharacterSetInput`<sup>Optional</sup> <a name="nCharacterSetInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSetInput"></a>

```java
public java.lang.String getNCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `operationsInsightsStateInput`<sup>Optional</sup> <a name="operationsInsightsStateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsStateInput"></a>

```java
public java.lang.String getOperationsInsightsStateInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointIpInput`<sup>Optional</sup> <a name="privateEndpointIpInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIpInput"></a>

```java
public java.lang.String getPrivateEndpointIpInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointLabelInput`<sup>Optional</sup> <a name="privateEndpointLabelInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabelInput"></a>

```java
public java.lang.String getPrivateEndpointLabelInput();
```

- *Type:* java.lang.String

---

##### `backupRetentionPeriodDays`<sup>Required</sup> <a name="backupRetentionPeriodDays" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDays"></a>

```java
public java.lang.Number getBackupRetentionPeriodDays();
```

- *Type:* java.lang.Number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeGb`<sup>Required</sup> <a name="dataStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGb"></a>

```java
public java.lang.Number getDataStorageSizeGb();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeTb`<sup>Required</sup> <a name="dataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTb"></a>

```java
public java.lang.Number getDataStorageSizeTb();
```

- *Type:* java.lang.Number

---

##### `dbEdition`<sup>Required</sup> <a name="dbEdition" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEdition"></a>

```java
public java.lang.String getDbEdition();
```

- *Type:* java.lang.String

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkload"></a>

```java
public java.lang.String getDbWorkload();
```

- *Type:* java.lang.String

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabled"></a>

```java
public java.lang.Object getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isStorageAutoScalingEnabled`<sup>Required</sup> <a name="isStorageAutoScalingEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabled"></a>

```java
public java.lang.Object getIsStorageAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `maintenanceScheduleType`<sup>Required</sup> <a name="maintenanceScheduleType" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleType"></a>

```java
public java.lang.String getMaintenanceScheduleType();
```

- *Type:* java.lang.String

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequired"></a>

```java
public java.lang.Object getMtlsConnectionRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nCharacterSet`<sup>Required</sup> <a name="nCharacterSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSet"></a>

```java
public java.lang.String getNCharacterSet();
```

- *Type:* java.lang.String

---

##### `operationsInsightsState`<sup>Required</sup> <a name="operationsInsightsState" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsState"></a>

```java
public java.lang.String getOperationsInsightsState();
```

- *Type:* java.lang.String

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

---

##### `privateEndpointLabel`<sup>Required</sup> <a name="privateEndpointLabel" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabel"></a>

```java
public java.lang.String getPrivateEndpointLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseAutonomousDatabaseProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseProperties">GoogleOracleDatabaseAutonomousDatabaseProperties</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList;

new GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference;

new GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.stopTime">stopTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.startTime"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList</a>

---

##### `stopTime`<sup>Required</sup> <a name="stopTime" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.stopTime"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList getStopTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList;

new GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference;

new GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime</a>

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList;

new GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference <a name="GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference;

new GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime">GoogleOracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime</a>

---


### GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference <a name="GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_oracle_database_autonomous_database.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference;

new GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleOracleDatabaseAutonomousDatabase.GoogleOracleDatabaseAutonomousDatabaseTimeouts">GoogleOracleDatabaseAutonomousDatabaseTimeouts</a>

---



