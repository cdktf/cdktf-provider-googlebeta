# `googleSqlSourceRepresentationInstance` Submodule <a name="`googleSqlSourceRepresentationInstance` Submodule" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSqlSourceRepresentationInstance <a name="GoogleSqlSourceRepresentationInstance" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance google_sql_source_representation_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSqlSourceRepresentationInstance(Construct Scope, string Id, GoogleSqlSourceRepresentationInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig">GoogleSqlSourceRepresentationInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig">GoogleSqlSourceRepresentationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetCaCertificate">ResetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetDumpFilePath">ResetDumpFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSqlSourceRepresentationInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts">GoogleSqlSourceRepresentationInstanceTimeouts</a>

---

##### `ResetCaCertificate` <a name="ResetCaCertificate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetCaCertificate"></a>

```csharp
private void ResetCaCertificate()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetClientCertificate"></a>

```csharp
private void ResetClientCertificate()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetClientKey"></a>

```csharp
private void ResetClientKey()
```

##### `ResetDumpFilePath` <a name="ResetDumpFilePath" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetDumpFilePath"></a>

```csharp
private void ResetDumpFilePath()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSqlSourceRepresentationInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSqlSourceRepresentationInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSqlSourceRepresentationInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSqlSourceRepresentationInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSqlSourceRepresentationInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleSqlSourceRepresentationInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSqlSourceRepresentationInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSqlSourceRepresentationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSqlSourceRepresentationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference">GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.caCertificateInput">CaCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientKeyInput">ClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.databaseVersionInput">DatabaseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.dumpFilePathInput">DumpFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.caCertificate">CaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientKey">ClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.dumpFilePath">DumpFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.timeouts"></a>

```csharp
public GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference">GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference</a>

---

##### `CaCertificateInput`<sup>Optional</sup> <a name="CaCertificateInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.caCertificateInput"></a>

```csharp
public string CaCertificateInput { get; }
```

- *Type:* string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientCertificateInput"></a>

```csharp
public string ClientCertificateInput { get; }
```

- *Type:* string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientKeyInput"></a>

```csharp
public string ClientKeyInput { get; }
```

- *Type:* string

---

##### `DatabaseVersionInput`<sup>Optional</sup> <a name="DatabaseVersionInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.databaseVersionInput"></a>

```csharp
public string DatabaseVersionInput { get; }
```

- *Type:* string

---

##### `DumpFilePathInput`<sup>Optional</sup> <a name="DumpFilePathInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.dumpFilePathInput"></a>

```csharp
public string DumpFilePathInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.caCertificate"></a>

```csharp
public string CaCertificate { get; }
```

- *Type:* string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.clientKey"></a>

```csharp
public string ClientKey { get; }
```

- *Type:* string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DumpFilePath`<sup>Required</sup> <a name="DumpFilePath" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.dumpFilePath"></a>

```csharp
public string DumpFilePath { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSqlSourceRepresentationInstanceConfig <a name="GoogleSqlSourceRepresentationInstanceConfig" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSqlSourceRepresentationInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseVersion,
    string Host,
    string Name,
    string CaCertificate = null,
    string ClientCertificate = null,
    string ClientKey = null,
    string DumpFilePath = null,
    string Id = null,
    string Password = null,
    double Port = null,
    string Project = null,
    string Region = null,
    GoogleSqlSourceRepresentationInstanceTimeouts Timeouts = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | The MySQL, PostgreSQL or SQL Server (beta) version to use. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.host">Host</a></code> | <code>string</code> | The IPv4 address and port for the external server, or the the DNS address for the external server. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.name">Name</a></code> | <code>string</code> | The name of the source representation instance. Use any valid Cloud SQL instance name. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.caCertificate">CaCertificate</a></code> | <code>string</code> | The CA certificate on the external server. Include only if SSL/TLS is used on the external server. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | The client certificate on the external server. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.clientKey">ClientKey</a></code> | <code>string</code> | The private key file for the client certificate on the external server. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.dumpFilePath">DumpFilePath</a></code> | <code>string</code> | A file in the bucket that contains the data from the external server. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#id GoogleSqlSourceRepresentationInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.password">Password</a></code> | <code>string</code> | The password for the replication user account. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.port">Port</a></code> | <code>double</code> | The externally accessible port for the source database server. Defaults to 3306. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#project GoogleSqlSourceRepresentationInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.region">Region</a></code> | <code>string</code> | The Region in which the created instance should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts">GoogleSqlSourceRepresentationInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.username">Username</a></code> | <code>string</code> | The replication user account on the external server. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; set; }
```

- *Type:* string

The MySQL, PostgreSQL or SQL Server (beta) version to use.

Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, MYSQL_8_4, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, POSTGRES_16, POSTGRES_17. Database Version Policies includes an up-to-date reference of supported versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#database_version GoogleSqlSourceRepresentationInstance#database_version}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The IPv4 address and port for the external server, or the the DNS address for the external server.

If the external server is hosted on Cloud SQL, the port is 5432.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#host GoogleSqlSourceRepresentationInstance#host}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the source representation instance. Use any valid Cloud SQL instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#name GoogleSqlSourceRepresentationInstance#name}

---

##### `CaCertificate`<sup>Optional</sup> <a name="CaCertificate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.caCertificate"></a>

```csharp
public string CaCertificate { get; set; }
```

- *Type:* string

The CA certificate on the external server. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#ca_certificate GoogleSqlSourceRepresentationInstance#ca_certificate}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; set; }
```

- *Type:* string

The client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#client_certificate GoogleSqlSourceRepresentationInstance#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.clientKey"></a>

```csharp
public string ClientKey { get; set; }
```

- *Type:* string

The private key file for the client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#client_key GoogleSqlSourceRepresentationInstance#client_key}

---

##### `DumpFilePath`<sup>Optional</sup> <a name="DumpFilePath" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.dumpFilePath"></a>

```csharp
public string DumpFilePath { get; set; }
```

- *Type:* string

A file in the bucket that contains the data from the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#dump_file_path GoogleSqlSourceRepresentationInstance#dump_file_path}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#id GoogleSqlSourceRepresentationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password for the replication user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#password GoogleSqlSourceRepresentationInstance#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The externally accessible port for the source database server. Defaults to 3306.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#port GoogleSqlSourceRepresentationInstance#port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#project GoogleSqlSourceRepresentationInstance#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Region in which the created instance should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#region GoogleSqlSourceRepresentationInstance#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.timeouts"></a>

```csharp
public GoogleSqlSourceRepresentationInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts">GoogleSqlSourceRepresentationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#timeouts GoogleSqlSourceRepresentationInstance#timeouts}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The replication user account on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#username GoogleSqlSourceRepresentationInstance#username}

---

### GoogleSqlSourceRepresentationInstanceTimeouts <a name="GoogleSqlSourceRepresentationInstanceTimeouts" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSqlSourceRepresentationInstanceTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#create GoogleSqlSourceRepresentationInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#delete GoogleSqlSourceRepresentationInstance#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#create GoogleSqlSourceRepresentationInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_sql_source_representation_instance#delete GoogleSqlSourceRepresentationInstance#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference <a name="GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSqlSourceRepresentationInstance.GoogleSqlSourceRepresentationInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



