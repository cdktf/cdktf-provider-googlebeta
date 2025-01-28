# `googleNetappActiveDirectory` Submodule <a name="`googleNetappActiveDirectory` Submodule" id="@cdktf/provider-google-beta.googleNetappActiveDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappActiveDirectory <a name="GoogleNetappActiveDirectory" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory google_netapp_active_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappActiveDirectory(Construct Scope, string Id, GoogleNetappActiveDirectoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig">GoogleNetappActiveDirectoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig">GoogleNetappActiveDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAdministrators">ResetAdministrators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAesEncryption">ResetAesEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetBackupOperators">ResetBackupOperators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetEncryptDcConnections">ResetEncryptDcConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcHostname">ResetKdcHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcIp">ResetKdcIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLdapSigning">ResetLdapSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetNfsUsersWithLdap">ResetNfsUsersWithLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOrganizationalUnit">ResetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSecurityOperators">ResetSecurityOperators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSite">ResetSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetappActiveDirectoryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

---

##### `ResetAdministrators` <a name="ResetAdministrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAdministrators"></a>

```csharp
private void ResetAdministrators()
```

##### `ResetAesEncryption` <a name="ResetAesEncryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAesEncryption"></a>

```csharp
private void ResetAesEncryption()
```

##### `ResetBackupOperators` <a name="ResetBackupOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetBackupOperators"></a>

```csharp
private void ResetBackupOperators()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptDcConnections` <a name="ResetEncryptDcConnections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetEncryptDcConnections"></a>

```csharp
private void ResetEncryptDcConnections()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKdcHostname` <a name="ResetKdcHostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcHostname"></a>

```csharp
private void ResetKdcHostname()
```

##### `ResetKdcIp` <a name="ResetKdcIp" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcIp"></a>

```csharp
private void ResetKdcIp()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLdapSigning` <a name="ResetLdapSigning" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLdapSigning"></a>

```csharp
private void ResetLdapSigning()
```

##### `ResetNfsUsersWithLdap` <a name="ResetNfsUsersWithLdap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetNfsUsersWithLdap"></a>

```csharp
private void ResetNfsUsersWithLdap()
```

##### `ResetOrganizationalUnit` <a name="ResetOrganizationalUnit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOrganizationalUnit"></a>

```csharp
private void ResetOrganizationalUnit()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSecurityOperators` <a name="ResetSecurityOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSecurityOperators"></a>

```csharp
private void ResetSecurityOperators()
```

##### `ResetSite` <a name="ResetSite" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSite"></a>

```csharp
private void ResetSite()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappActiveDirectory resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappActiveDirectory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappActiveDirectory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappActiveDirectory.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappActiveDirectory.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetappActiveDirectory resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetappActiveDirectory to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetappActiveDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappActiveDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.stateDetails">StateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference">GoogleNetappActiveDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administratorsInput">AdministratorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryptionInput">AesEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperatorsInput">BackupOperatorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dnsInput">DnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnectionsInput">EncryptDcConnectionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostnameInput">KdcHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIpInput">KdcIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigningInput">LdapSigningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefixInput">NetBiosPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdapInput">NfsUsersWithLdapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnitInput">OrganizationalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperatorsInput">SecurityOperatorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.siteInput">SiteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administrators">Administrators</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryption">AesEncryption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperators">BackupOperators</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dns">Dns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnections">EncryptDcConnections</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostname">KdcHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIp">KdcIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigning">LdapSigning</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefix">NetBiosPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdap">NfsUsersWithLdap</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperators">SecurityOperators</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.site">Site</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.stateDetails"></a>

```csharp
public string StateDetails { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeouts"></a>

```csharp
public GoogleNetappActiveDirectoryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference">GoogleNetappActiveDirectoryTimeoutsOutputReference</a>

---

##### `AdministratorsInput`<sup>Optional</sup> <a name="AdministratorsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administratorsInput"></a>

```csharp
public string[] AdministratorsInput { get; }
```

- *Type:* string[]

---

##### `AesEncryptionInput`<sup>Optional</sup> <a name="AesEncryptionInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryptionInput"></a>

```csharp
public object AesEncryptionInput { get; }
```

- *Type:* object

---

##### `BackupOperatorsInput`<sup>Optional</sup> <a name="BackupOperatorsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperatorsInput"></a>

```csharp
public string[] BackupOperatorsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dnsInput"></a>

```csharp
public string DnsInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `EncryptDcConnectionsInput`<sup>Optional</sup> <a name="EncryptDcConnectionsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnectionsInput"></a>

```csharp
public object EncryptDcConnectionsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KdcHostnameInput`<sup>Optional</sup> <a name="KdcHostnameInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostnameInput"></a>

```csharp
public string KdcHostnameInput { get; }
```

- *Type:* string

---

##### `KdcIpInput`<sup>Optional</sup> <a name="KdcIpInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIpInput"></a>

```csharp
public string KdcIpInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LdapSigningInput`<sup>Optional</sup> <a name="LdapSigningInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigningInput"></a>

```csharp
public object LdapSigningInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetBiosPrefixInput`<sup>Optional</sup> <a name="NetBiosPrefixInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefixInput"></a>

```csharp
public string NetBiosPrefixInput { get; }
```

- *Type:* string

---

##### `NfsUsersWithLdapInput`<sup>Optional</sup> <a name="NfsUsersWithLdapInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdapInput"></a>

```csharp
public object NfsUsersWithLdapInput { get; }
```

- *Type:* object

---

##### `OrganizationalUnitInput`<sup>Optional</sup> <a name="OrganizationalUnitInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnitInput"></a>

```csharp
public string OrganizationalUnitInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecurityOperatorsInput`<sup>Optional</sup> <a name="SecurityOperatorsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperatorsInput"></a>

```csharp
public string[] SecurityOperatorsInput { get; }
```

- *Type:* string[]

---

##### `SiteInput`<sup>Optional</sup> <a name="SiteInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.siteInput"></a>

```csharp
public string SiteInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Administrators`<sup>Required</sup> <a name="Administrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administrators"></a>

```csharp
public string[] Administrators { get; }
```

- *Type:* string[]

---

##### `AesEncryption`<sup>Required</sup> <a name="AesEncryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryption"></a>

```csharp
public object AesEncryption { get; }
```

- *Type:* object

---

##### `BackupOperators`<sup>Required</sup> <a name="BackupOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperators"></a>

```csharp
public string[] BackupOperators { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dns"></a>

```csharp
public string Dns { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `EncryptDcConnections`<sup>Required</sup> <a name="EncryptDcConnections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnections"></a>

```csharp
public object EncryptDcConnections { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KdcHostname`<sup>Required</sup> <a name="KdcHostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostname"></a>

```csharp
public string KdcHostname { get; }
```

- *Type:* string

---

##### `KdcIp`<sup>Required</sup> <a name="KdcIp" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIp"></a>

```csharp
public string KdcIp { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LdapSigning`<sup>Required</sup> <a name="LdapSigning" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigning"></a>

```csharp
public object LdapSigning { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetBiosPrefix`<sup>Required</sup> <a name="NetBiosPrefix" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefix"></a>

```csharp
public string NetBiosPrefix { get; }
```

- *Type:* string

---

##### `NfsUsersWithLdap`<sup>Required</sup> <a name="NfsUsersWithLdap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdap"></a>

```csharp
public object NfsUsersWithLdap { get; }
```

- *Type:* object

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecurityOperators`<sup>Required</sup> <a name="SecurityOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperators"></a>

```csharp
public string[] SecurityOperators { get; }
```

- *Type:* string[]

---

##### `Site`<sup>Required</sup> <a name="Site" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.site"></a>

```csharp
public string Site { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappActiveDirectoryConfig <a name="GoogleNetappActiveDirectoryConfig" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappActiveDirectoryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Dns,
    string Domain,
    string Location,
    string Name,
    string NetBiosPrefix,
    string Password,
    string Username,
    string[] Administrators = null,
    object AesEncryption = null,
    string[] BackupOperators = null,
    string Description = null,
    object EncryptDcConnections = null,
    string Id = null,
    string KdcHostname = null,
    string KdcIp = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    object LdapSigning = null,
    object NfsUsersWithLdap = null,
    string OrganizationalUnit = null,
    string Project = null,
    string[] SecurityOperators = null,
    string Site = null,
    GoogleNetappActiveDirectoryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dns">Dns</a></code> | <code>string</code> | Comma separated list of DNS server IP addresses for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.domain">Domain</a></code> | <code>string</code> | Fully qualified domain name for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.location">Location</a></code> | <code>string</code> | Name of the region for the policy to apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the Active Directory pool. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.netBiosPrefix">NetBiosPrefix</a></code> | <code>string</code> | NetBIOS name prefix of the server to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.password">Password</a></code> | <code>string</code> | Password for specified username. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.username">Username</a></code> | <code>string</code> | Username for the Active Directory account with permissions to create the compute account within the specified organizational unit. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.administrators">Administrators</a></code> | <code>string[]</code> | Domain user accounts to be added to the local Administrators group of the SMB service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.aesEncryption">AesEncryption</a></code> | <code>object</code> | Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.backupOperators">BackupOperators</a></code> | <code>string[]</code> | Domain user/group accounts to be added to the Backup Operators group of the SMB service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.encryptDcConnections">EncryptDcConnections</a></code> | <code>object</code> | If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#id GoogleNetappActiveDirectory#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcHostname">KdcHostname</a></code> | <code>string</code> | Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcIp">KdcIp</a></code> | <code>string</code> | IP address of the Active Directory server used as Kerberos Key Distribution Center. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.ldapSigning">LdapSigning</a></code> | <code>object</code> | Specifies whether or not the LDAP traffic needs to be signed. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.nfsUsersWithLdap">NfsUsersWithLdap</a></code> | <code>object</code> | Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.organizationalUnit">OrganizationalUnit</a></code> | <code>string</code> | Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#project GoogleNetappActiveDirectory#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.securityOperators">SecurityOperators</a></code> | <code>string[]</code> | Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.site">Site</a></code> | <code>string</code> | Specifies an Active Directory site to manage domain controller selection. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dns"></a>

```csharp
public string Dns { get; set; }
```

- *Type:* string

Comma separated list of DNS server IP addresses for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#dns GoogleNetappActiveDirectory#dns}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Fully qualified domain name for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#domain GoogleNetappActiveDirectory#domain}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Name of the region for the policy to apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#location GoogleNetappActiveDirectory#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the Active Directory pool. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#name GoogleNetappActiveDirectory#name}

---

##### `NetBiosPrefix`<sup>Required</sup> <a name="NetBiosPrefix" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.netBiosPrefix"></a>

```csharp
public string NetBiosPrefix { get; set; }
```

- *Type:* string

NetBIOS name prefix of the server to be created.

A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
'\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#net_bios_prefix GoogleNetappActiveDirectory#net_bios_prefix}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for specified username.

Note - Manual changes done to the password will not be detected. Terraform will not re-apply the password, unless you use a new password in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#password GoogleNetappActiveDirectory#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#username GoogleNetappActiveDirectory#username}

---

##### `Administrators`<sup>Optional</sup> <a name="Administrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.administrators"></a>

```csharp
public string[] Administrators { get; set; }
```

- *Type:* string[]

Domain user accounts to be added to the local Administrators group of the SMB service.

Comma-separated list of domain users or groups. The Domain Admin group is automatically added when the service joins your domain as a hidden group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#administrators GoogleNetappActiveDirectory#administrators}

---

##### `AesEncryption`<sup>Optional</sup> <a name="AesEncryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.aesEncryption"></a>

```csharp
public object AesEncryption { get; set; }
```

- *Type:* object

Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#aes_encryption GoogleNetappActiveDirectory#aes_encryption}

---

##### `BackupOperators`<sup>Optional</sup> <a name="BackupOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.backupOperators"></a>

```csharp
public string[] BackupOperators { get; set; }
```

- *Type:* string[]

Domain user/group accounts to be added to the Backup Operators group of the SMB service.

The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#backup_operators GoogleNetappActiveDirectory#backup_operators}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#description GoogleNetappActiveDirectory#description}

---

##### `EncryptDcConnections`<sup>Optional</sup> <a name="EncryptDcConnections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.encryptDcConnections"></a>

```csharp
public object EncryptDcConnections { get; set; }
```

- *Type:* object

If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#encrypt_dc_connections GoogleNetappActiveDirectory#encrypt_dc_connections}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#id GoogleNetappActiveDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KdcHostname`<sup>Optional</sup> <a name="KdcHostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcHostname"></a>

```csharp
public string KdcHostname { get; set; }
```

- *Type:* string

Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#kdc_hostname GoogleNetappActiveDirectory#kdc_hostname}

---

##### `KdcIp`<sup>Optional</sup> <a name="KdcIp" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcIp"></a>

```csharp
public string KdcIp { get; set; }
```

- *Type:* string

IP address of the Active Directory server used as Kerberos Key Distribution Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#kdc_ip GoogleNetappActiveDirectory#kdc_ip}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#labels GoogleNetappActiveDirectory#labels}

---

##### `LdapSigning`<sup>Optional</sup> <a name="LdapSigning" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.ldapSigning"></a>

```csharp
public object LdapSigning { get; set; }
```

- *Type:* object

Specifies whether or not the LDAP traffic needs to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#ldap_signing GoogleNetappActiveDirectory#ldap_signing}

---

##### `NfsUsersWithLdap`<sup>Optional</sup> <a name="NfsUsersWithLdap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.nfsUsersWithLdap"></a>

```csharp
public object NfsUsersWithLdap { get; set; }
```

- *Type:* object

Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.

This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#nfs_users_with_ldap GoogleNetappActiveDirectory#nfs_users_with_ldap}

---

##### `OrganizationalUnit`<sup>Optional</sup> <a name="OrganizationalUnit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.organizationalUnit"></a>

```csharp
public string OrganizationalUnit { get; set; }
```

- *Type:* string

Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.

Defaults to 'CN=Computers' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#organizational_unit GoogleNetappActiveDirectory#organizational_unit}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#project GoogleNetappActiveDirectory#project}.

---

##### `SecurityOperators`<sup>Optional</sup> <a name="SecurityOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.securityOperators"></a>

```csharp
public string[] SecurityOperators { get; set; }
```

- *Type:* string[]

Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#security_operators GoogleNetappActiveDirectory#security_operators}

---

##### `Site`<sup>Optional</sup> <a name="Site" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.site"></a>

```csharp
public string Site { get; set; }
```

- *Type:* string

Specifies an Active Directory site to manage domain controller selection.

Use when Active Directory domain controllers in multiple regions are configured. Defaults to 'Default-First-Site-Name' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#site GoogleNetappActiveDirectory#site}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.timeouts"></a>

```csharp
public GoogleNetappActiveDirectoryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#timeouts GoogleNetappActiveDirectory#timeouts}

---

### GoogleNetappActiveDirectoryTimeouts <a name="GoogleNetappActiveDirectoryTimeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappActiveDirectoryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#create GoogleNetappActiveDirectory#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#delete GoogleNetappActiveDirectory#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#update GoogleNetappActiveDirectory#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#create GoogleNetappActiveDirectory#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#delete GoogleNetappActiveDirectory#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_netapp_active_directory#update GoogleNetappActiveDirectory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappActiveDirectoryTimeoutsOutputReference <a name="GoogleNetappActiveDirectoryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappActiveDirectoryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



