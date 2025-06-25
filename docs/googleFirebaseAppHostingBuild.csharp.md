# `googleFirebaseAppHostingBuild` Submodule <a name="`googleFirebaseAppHostingBuild` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppHostingBuild <a name="GoogleFirebaseAppHostingBuild" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build google_firebase_app_hosting_build}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuild(Construct Scope, string Id, GoogleFirebaseAppHostingBuildConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig">GoogleFirebaseAppHostingBuildConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig">GoogleFirebaseAppHostingBuildConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.putSource"></a>

```csharp
private void PutSource(GoogleFirebaseAppHostingBuildSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleFirebaseAppHostingBuildTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts">GoogleFirebaseAppHostingBuildTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppHostingBuild resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirebaseAppHostingBuild.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirebaseAppHostingBuild.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirebaseAppHostingBuild.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleFirebaseAppHostingBuild.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleFirebaseAppHostingBuild resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAppHostingBuild to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAppHostingBuild that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppHostingBuild to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.buildLogsUri">BuildLogsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList">GoogleFirebaseAppHostingBuildErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.errorSource">ErrorSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference">GoogleFirebaseAppHostingBuildSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference">GoogleFirebaseAppHostingBuildTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.buildIdInput">BuildIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.buildId">BuildId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BuildLogsUri`<sup>Required</sup> <a name="BuildLogsUri" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.buildLogsUri"></a>

```csharp
public string BuildLogsUri { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.error"></a>

```csharp
public GoogleFirebaseAppHostingBuildErrorList Error { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList">GoogleFirebaseAppHostingBuildErrorList</a>

---

##### `ErrorSource`<sup>Required</sup> <a name="ErrorSource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.errorSource"></a>

```csharp
public string ErrorSource { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.source"></a>

```csharp
public GoogleFirebaseAppHostingBuildSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference">GoogleFirebaseAppHostingBuildSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.timeouts"></a>

```csharp
public GoogleFirebaseAppHostingBuildTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference">GoogleFirebaseAppHostingBuildTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `BuildIdInput`<sup>Optional</sup> <a name="BuildIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.buildIdInput"></a>

```csharp
public string BuildIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.sourceInput"></a>

```csharp
public GoogleFirebaseAppHostingBuildSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `BuildId`<sup>Required</sup> <a name="BuildId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.buildId"></a>

```csharp
public string BuildId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuild.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppHostingBuildConfig <a name="GoogleFirebaseAppHostingBuildConfig" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Backend,
    string BuildId,
    string Location,
    GoogleFirebaseAppHostingBuildSource Source,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleFirebaseAppHostingBuildTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.backend">Backend</a></code> | <code>string</code> | The ID of the Backend that this Build applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.buildId">BuildId</a></code> | <code>string</code> | The user-specified ID of the build being created. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.location">Location</a></code> | <code>string</code> | The location of the Backend that this Build applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#id GoogleFirebaseAppHostingBuild#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#project GoogleFirebaseAppHostingBuild#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts">GoogleFirebaseAppHostingBuildTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The ID of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#backend GoogleFirebaseAppHostingBuild#backend}

---

##### `BuildId`<sup>Required</sup> <a name="BuildId" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.buildId"></a>

```csharp
public string BuildId { get; set; }
```

- *Type:* string

The user-specified ID of the build being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#build_id GoogleFirebaseAppHostingBuild#build_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#location GoogleFirebaseAppHostingBuild#location}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.source"></a>

```csharp
public GoogleFirebaseAppHostingBuildSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#source GoogleFirebaseAppHostingBuild#source}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#annotations GoogleFirebaseAppHostingBuild#annotations}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#display_name GoogleFirebaseAppHostingBuild#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#id GoogleFirebaseAppHostingBuild#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unstructured key value map that can be used to organize and categorize objects.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#labels GoogleFirebaseAppHostingBuild#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#project GoogleFirebaseAppHostingBuild#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildConfig.property.timeouts"></a>

```csharp
public GoogleFirebaseAppHostingBuildTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts">GoogleFirebaseAppHostingBuildTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#timeouts GoogleFirebaseAppHostingBuild#timeouts}

---

### GoogleFirebaseAppHostingBuildError <a name="GoogleFirebaseAppHostingBuildError" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildError {

};
```


### GoogleFirebaseAppHostingBuildSource <a name="GoogleFirebaseAppHostingBuildSource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildSource {
    GoogleFirebaseAppHostingBuildSourceCodebase Codebase = null,
    GoogleFirebaseAppHostingBuildSourceContainer Container = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource.property.codebase">Codebase</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a></code> | codebase block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource.property.container">Container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a></code> | container block. |

---

##### `Codebase`<sup>Optional</sup> <a name="Codebase" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource.property.codebase"></a>

```csharp
public GoogleFirebaseAppHostingBuildSourceCodebase Codebase { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a>

codebase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#codebase GoogleFirebaseAppHostingBuild#codebase}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource.property.container"></a>

```csharp
public GoogleFirebaseAppHostingBuildSourceContainer Container { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#container GoogleFirebaseAppHostingBuild#container}

---

### GoogleFirebaseAppHostingBuildSourceCodebase <a name="GoogleFirebaseAppHostingBuildSourceCodebase" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildSourceCodebase {
    string Branch = null,
    string Commit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase.property.branch">Branch</a></code> | <code>string</code> | The branch in the codebase to build from, using the latest commit. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase.property.commit">Commit</a></code> | <code>string</code> | The commit in the codebase to build from. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

The branch in the codebase to build from, using the latest commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#branch GoogleFirebaseAppHostingBuild#branch}

---

##### `Commit`<sup>Optional</sup> <a name="Commit" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase.property.commit"></a>

```csharp
public string Commit { get; set; }
```

- *Type:* string

The commit in the codebase to build from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#commit GoogleFirebaseAppHostingBuild#commit}

---

### GoogleFirebaseAppHostingBuildSourceCodebaseAuthor <a name="GoogleFirebaseAppHostingBuildSourceCodebaseAuthor" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildSourceCodebaseAuthor {

};
```


### GoogleFirebaseAppHostingBuildSourceContainer <a name="GoogleFirebaseAppHostingBuildSourceContainer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildSourceContainer {
    string Image
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer.property.image">Image</a></code> | <code>string</code> | A URI representing a container for the backend to use. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

A URI representing a container for the backend to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#image GoogleFirebaseAppHostingBuild#image}

---

### GoogleFirebaseAppHostingBuildTimeouts <a name="GoogleFirebaseAppHostingBuildTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#create GoogleFirebaseAppHostingBuild#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#delete GoogleFirebaseAppHostingBuild#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#update GoogleFirebaseAppHostingBuild#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#create GoogleFirebaseAppHostingBuild#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#delete GoogleFirebaseAppHostingBuild#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.41.0/docs/resources/google_firebase_app_hosting_build#update GoogleFirebaseAppHostingBuild#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppHostingBuildErrorList <a name="GoogleFirebaseAppHostingBuildErrorList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.get"></a>

```csharp
private GoogleFirebaseAppHostingBuildErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleFirebaseAppHostingBuildErrorOutputReference <a name="GoogleFirebaseAppHostingBuildErrorOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.details">Details</a></code> | <code>HashiCorp.Cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildError">GoogleFirebaseAppHostingBuildError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.details"></a>

```csharp
public StringMapList Details { get; }
```

- *Type:* HashiCorp.Cdktf.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleFirebaseAppHostingBuildError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildError">GoogleFirebaseAppHostingBuildError</a>

---


### GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList <a name="GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.get"></a>

```csharp
private GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference <a name="GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthor">GoogleFirebaseAppHostingBuildSourceCodebaseAuthor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.internalValue"></a>

```csharp
public GoogleFirebaseAppHostingBuildSourceCodebaseAuthor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthor">GoogleFirebaseAppHostingBuildSourceCodebaseAuthor</a>

---


### GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference <a name="GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resetCommit">ResetCommit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetCommit` <a name="ResetCommit" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.resetCommit"></a>

```csharp
private void ResetCommit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.author">Author</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList">GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitMessage">CommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitTime">CommitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.hash">Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitInput">CommitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commit">Commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.author"></a>

```csharp
public GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList Author { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList">GoogleFirebaseAppHostingBuildSourceCodebaseAuthorList</a>

---

##### `CommitMessage`<sup>Required</sup> <a name="CommitMessage" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitMessage"></a>

```csharp
public string CommitMessage { get; }
```

- *Type:* string

---

##### `CommitTime`<sup>Required</sup> <a name="CommitTime" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitTime"></a>

```csharp
public string CommitTime { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.hash"></a>

```csharp
public string Hash { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CommitInput`<sup>Optional</sup> <a name="CommitInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitInput"></a>

```csharp
public string CommitInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.commit"></a>

```csharp
public string Commit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference.property.internalValue"></a>

```csharp
public GoogleFirebaseAppHostingBuildSourceCodebase InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a>

---


### GoogleFirebaseAppHostingBuildSourceContainerOutputReference <a name="GoogleFirebaseAppHostingBuildSourceContainerOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildSourceContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference.property.internalValue"></a>

```csharp
public GoogleFirebaseAppHostingBuildSourceContainer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a>

---


### GoogleFirebaseAppHostingBuildSourceOutputReference <a name="GoogleFirebaseAppHostingBuildSourceOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.putCodebase">PutCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.putContainer">PutContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resetCodebase">ResetCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodebase` <a name="PutCodebase" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.putCodebase"></a>

```csharp
private void PutCodebase(GoogleFirebaseAppHostingBuildSourceCodebase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.putCodebase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a>

---

##### `PutContainer` <a name="PutContainer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.putContainer"></a>

```csharp
private void PutContainer(GoogleFirebaseAppHostingBuildSourceContainer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a>

---

##### `ResetCodebase` <a name="ResetCodebase" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resetCodebase"></a>

```csharp
private void ResetCodebase()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.resetContainer"></a>

```csharp
private void ResetContainer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.codebase">Codebase</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference">GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.container">Container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference">GoogleFirebaseAppHostingBuildSourceContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.codebaseInput">CodebaseInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.containerInput">ContainerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Codebase`<sup>Required</sup> <a name="Codebase" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.codebase"></a>

```csharp
public GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference Codebase { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference">GoogleFirebaseAppHostingBuildSourceCodebaseOutputReference</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.container"></a>

```csharp
public GoogleFirebaseAppHostingBuildSourceContainerOutputReference Container { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainerOutputReference">GoogleFirebaseAppHostingBuildSourceContainerOutputReference</a>

---

##### `CodebaseInput`<sup>Optional</sup> <a name="CodebaseInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.codebaseInput"></a>

```csharp
public GoogleFirebaseAppHostingBuildSourceCodebase CodebaseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceCodebase">GoogleFirebaseAppHostingBuildSourceCodebase</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.containerInput"></a>

```csharp
public GoogleFirebaseAppHostingBuildSourceContainer ContainerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceContainer">GoogleFirebaseAppHostingBuildSourceContainer</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleFirebaseAppHostingBuildSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildSource">GoogleFirebaseAppHostingBuildSource</a>

---


### GoogleFirebaseAppHostingBuildTimeoutsOutputReference <a name="GoogleFirebaseAppHostingBuildTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleFirebaseAppHostingBuildTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppHostingBuild.GoogleFirebaseAppHostingBuildTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



