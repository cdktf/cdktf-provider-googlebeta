# `googleGeminiRepositoryGroup` Submodule <a name="`googleGeminiRepositoryGroup` Submodule" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiRepositoryGroup <a name="GoogleGeminiRepositoryGroup" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group google_gemini_repository_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGeminiRepositoryGroup(Construct Scope, string Id, GoogleGeminiRepositoryGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig">GoogleGeminiRepositoryGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig">GoogleGeminiRepositoryGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.putRepositories">PutRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRepositories` <a name="PutRepositories" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.putRepositories"></a>

```csharp
private void PutRepositories(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.putRepositories.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleGeminiRepositoryGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts">GoogleGeminiRepositoryGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiRepositoryGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGeminiRepositoryGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGeminiRepositoryGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGeminiRepositoryGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGeminiRepositoryGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleGeminiRepositoryGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGeminiRepositoryGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGeminiRepositoryGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiRepositoryGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositories">Repositories</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList">GoogleGeminiRepositoryGroupRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference">GoogleGeminiRepositoryGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.codeRepositoryIndexInput">CodeRepositoryIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositoriesInput">RepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositoryGroupIdInput">RepositoryGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.codeRepositoryIndex">CodeRepositoryIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositoryGroupId">RepositoryGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositories"></a>

```csharp
public GoogleGeminiRepositoryGroupRepositoriesList Repositories { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList">GoogleGeminiRepositoryGroupRepositoriesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.timeouts"></a>

```csharp
public GoogleGeminiRepositoryGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference">GoogleGeminiRepositoryGroupTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CodeRepositoryIndexInput`<sup>Optional</sup> <a name="CodeRepositoryIndexInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.codeRepositoryIndexInput"></a>

```csharp
public string CodeRepositoryIndexInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoriesInput`<sup>Optional</sup> <a name="RepositoriesInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositoriesInput"></a>

```csharp
public object RepositoriesInput { get; }
```

- *Type:* object

---

##### `RepositoryGroupIdInput`<sup>Optional</sup> <a name="RepositoryGroupIdInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositoryGroupIdInput"></a>

```csharp
public string RepositoryGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CodeRepositoryIndex`<sup>Required</sup> <a name="CodeRepositoryIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.codeRepositoryIndex"></a>

```csharp
public string CodeRepositoryIndex { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryGroupId`<sup>Required</sup> <a name="RepositoryGroupId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositoryGroupId"></a>

```csharp
public string RepositoryGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiRepositoryGroupConfig <a name="GoogleGeminiRepositoryGroupConfig" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGeminiRepositoryGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CodeRepositoryIndex,
    string Location,
    object Repositories,
    string RepositoryGroupId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleGeminiRepositoryGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.codeRepositoryIndex">CodeRepositoryIndex</a></code> | <code>string</code> | Required. Id of the Code Repository Index. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.location">Location</a></code> | <code>string</code> | The location of the Code Repository Index, for example 'us-central1'. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.repositories">Repositories</a></code> | <code>object</code> | repositories block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.repositoryGroupId">RepositoryGroupId</a></code> | <code>string</code> | Required. Id of the Repository Group. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#id GoogleGeminiRepositoryGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#project GoogleGeminiRepositoryGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts">GoogleGeminiRepositoryGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CodeRepositoryIndex`<sup>Required</sup> <a name="CodeRepositoryIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.codeRepositoryIndex"></a>

```csharp
public string CodeRepositoryIndex { get; set; }
```

- *Type:* string

Required. Id of the Code Repository Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#code_repository_index GoogleGeminiRepositoryGroup#code_repository_index}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the Code Repository Index, for example 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#location GoogleGeminiRepositoryGroup#location}

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.repositories"></a>

```csharp
public object Repositories { get; set; }
```

- *Type:* object

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#repositories GoogleGeminiRepositoryGroup#repositories}

---

##### `RepositoryGroupId`<sup>Required</sup> <a name="RepositoryGroupId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.repositoryGroupId"></a>

```csharp
public string RepositoryGroupId { get; set; }
```

- *Type:* string

Required. Id of the Repository Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#repository_group_id GoogleGeminiRepositoryGroup#repository_group_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#id GoogleGeminiRepositoryGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#labels GoogleGeminiRepositoryGroup#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#project GoogleGeminiRepositoryGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.timeouts"></a>

```csharp
public GoogleGeminiRepositoryGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts">GoogleGeminiRepositoryGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#timeouts GoogleGeminiRepositoryGroup#timeouts}

---

### GoogleGeminiRepositoryGroupRepositories <a name="GoogleGeminiRepositoryGroupRepositories" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGeminiRepositoryGroupRepositories {
    string BranchPattern,
    string Resource
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories.property.branchPattern">BranchPattern</a></code> | <code>string</code> | Required. The Git branch pattern used for indexing in RE2 syntax. See https://github.com/google/re2/wiki/syntax for syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories.property.resource">Resource</a></code> | <code>string</code> | Required. The DeveloperConnect repository full resource name, relative resource name or resource URL to be indexed. |

---

##### `BranchPattern`<sup>Required</sup> <a name="BranchPattern" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories.property.branchPattern"></a>

```csharp
public string BranchPattern { get; set; }
```

- *Type:* string

Required. The Git branch pattern used for indexing in RE2 syntax. See https://github.com/google/re2/wiki/syntax for syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#branch_pattern GoogleGeminiRepositoryGroup#branch_pattern}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Required. The DeveloperConnect repository full resource name, relative resource name or resource URL to be indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#resource GoogleGeminiRepositoryGroup#resource}

---

### GoogleGeminiRepositoryGroupTimeouts <a name="GoogleGeminiRepositoryGroupTimeouts" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGeminiRepositoryGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#create GoogleGeminiRepositoryGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#delete GoogleGeminiRepositoryGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#update GoogleGeminiRepositoryGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#create GoogleGeminiRepositoryGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#delete GoogleGeminiRepositoryGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_gemini_repository_group#update GoogleGeminiRepositoryGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiRepositoryGroupRepositoriesList <a name="GoogleGeminiRepositoryGroupRepositoriesList" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGeminiRepositoryGroupRepositoriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.get"></a>

```csharp
private GoogleGeminiRepositoryGroupRepositoriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGeminiRepositoryGroupRepositoriesOutputReference <a name="GoogleGeminiRepositoryGroupRepositoriesOutputReference" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGeminiRepositoryGroupRepositoriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.branchPatternInput">BranchPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.branchPattern">BranchPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchPatternInput`<sup>Optional</sup> <a name="BranchPatternInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.branchPatternInput"></a>

```csharp
public string BranchPatternInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `BranchPattern`<sup>Required</sup> <a name="BranchPattern" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.branchPattern"></a>

```csharp
public string BranchPattern { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGeminiRepositoryGroupTimeoutsOutputReference <a name="GoogleGeminiRepositoryGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGeminiRepositoryGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



