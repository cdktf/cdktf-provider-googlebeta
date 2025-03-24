# `googleIamAccessBoundaryPolicy` Submodule <a name="`googleIamAccessBoundaryPolicy` Submodule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamAccessBoundaryPolicy <a name="GoogleIamAccessBoundaryPolicy" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy google_iam_access_boundary_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamAccessBoundaryPolicy(Construct Scope, string Id, GoogleIamAccessBoundaryPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig">GoogleIamAccessBoundaryPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig">GoogleIamAccessBoundaryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIamAccessBoundaryPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamAccessBoundaryPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamAccessBoundaryPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamAccessBoundaryPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIamAccessBoundaryPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIamAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamAccessBoundaryPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamAccessBoundaryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamAccessBoundaryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList">GoogleIamAccessBoundaryPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamAccessBoundaryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.rules"></a>

```csharp
public GoogleIamAccessBoundaryPolicyRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList">GoogleIamAccessBoundaryPolicyRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.timeouts"></a>

```csharp
public GoogleIamAccessBoundaryPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamAccessBoundaryPolicyTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamAccessBoundaryPolicyConfig <a name="GoogleIamAccessBoundaryPolicyConfig" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamAccessBoundaryPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Parent,
    object Rules,
    string DisplayName = null,
    string Id = null,
    GoogleIamAccessBoundaryPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.name">Name</a></code> | <code>string</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.parent">Parent</a></code> | <code>string</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#id GoogleIamAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#name GoogleIamAccessBoundaryPolicy#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#parent GoogleIamAccessBoundaryPolicy#parent}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#rules GoogleIamAccessBoundaryPolicy#rules}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#display_name GoogleIamAccessBoundaryPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#id GoogleIamAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.timeouts"></a>

```csharp
public GoogleIamAccessBoundaryPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#timeouts GoogleIamAccessBoundaryPolicy#timeouts}

---

### GoogleIamAccessBoundaryPolicyRules <a name="GoogleIamAccessBoundaryPolicyRules" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamAccessBoundaryPolicyRules {
    GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule AccessBoundaryRule = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.property.accessBoundaryRule">AccessBoundaryRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a></code> | access_boundary_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.property.description">Description</a></code> | <code>string</code> | The description of the rule. |

---

##### `AccessBoundaryRule`<sup>Optional</sup> <a name="AccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.property.accessBoundaryRule"></a>

```csharp
public GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule AccessBoundaryRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

access_boundary_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#access_boundary_rule GoogleIamAccessBoundaryPolicy#access_boundary_rule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#description GoogleIamAccessBoundaryPolicy#description}

---

### GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule <a name="GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule {
    GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition AvailabilityCondition = null,
    string[] AvailablePermissions = null,
    string AvailableResource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availabilityCondition">AvailabilityCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a></code> | availability_condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availablePermissions">AvailablePermissions</a></code> | <code>string[]</code> | A list of permissions that may be allowed for use on the specified resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availableResource">AvailableResource</a></code> | <code>string</code> | The full resource name of a Google Cloud resource entity. |

---

##### `AvailabilityCondition`<sup>Optional</sup> <a name="AvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availabilityCondition"></a>

```csharp
public GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition AvailabilityCondition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

availability_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#availability_condition GoogleIamAccessBoundaryPolicy#availability_condition}

---

##### `AvailablePermissions`<sup>Optional</sup> <a name="AvailablePermissions" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availablePermissions"></a>

```csharp
public string[] AvailablePermissions { get; set; }
```

- *Type:* string[]

A list of permissions that may be allowed for use on the specified resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#available_permissions GoogleIamAccessBoundaryPolicy#available_permissions}

---

##### `AvailableResource`<sup>Optional</sup> <a name="AvailableResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availableResource"></a>

```csharp
public string AvailableResource { get; set; }
```

- *Type:* string

The full resource name of a Google Cloud resource entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#available_resource GoogleIamAccessBoundaryPolicy#available_resource}

---

### GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition <a name="GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#expression GoogleIamAccessBoundaryPolicy#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#description GoogleIamAccessBoundaryPolicy#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#location GoogleIamAccessBoundaryPolicy#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#title GoogleIamAccessBoundaryPolicy#title}

---

### GoogleIamAccessBoundaryPolicyTimeouts <a name="GoogleIamAccessBoundaryPolicyTimeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamAccessBoundaryPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#create GoogleIamAccessBoundaryPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#delete GoogleIamAccessBoundaryPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#update GoogleIamAccessBoundaryPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#create GoogleIamAccessBoundaryPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#delete GoogleIamAccessBoundaryPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_iam_access_boundary_policy#update GoogleIamAccessBoundaryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference <a name="GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

---


### GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference <a name="GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition">PutAvailabilityCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailabilityCondition">ResetAvailabilityCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailablePermissions">ResetAvailablePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailableResource">ResetAvailableResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailabilityCondition` <a name="PutAvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition"></a>

```csharp
private void PutAvailabilityCondition(GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

---

##### `ResetAvailabilityCondition` <a name="ResetAvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailabilityCondition"></a>

```csharp
private void ResetAvailabilityCondition()
```

##### `ResetAvailablePermissions` <a name="ResetAvailablePermissions" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailablePermissions"></a>

```csharp
private void ResetAvailablePermissions()
```

##### `ResetAvailableResource` <a name="ResetAvailableResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailableResource"></a>

```csharp
private void ResetAvailableResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityCondition">AvailabilityCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityConditionInput">AvailabilityConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissionsInput">AvailablePermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResourceInput">AvailableResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissions">AvailablePermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResource">AvailableResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityCondition`<sup>Required</sup> <a name="AvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityCondition"></a>

```csharp
public GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference AvailabilityCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference</a>

---

##### `AvailabilityConditionInput`<sup>Optional</sup> <a name="AvailabilityConditionInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityConditionInput"></a>

```csharp
public GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition AvailabilityConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

---

##### `AvailablePermissionsInput`<sup>Optional</sup> <a name="AvailablePermissionsInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissionsInput"></a>

```csharp
public string[] AvailablePermissionsInput { get; }
```

- *Type:* string[]

---

##### `AvailableResourceInput`<sup>Optional</sup> <a name="AvailableResourceInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResourceInput"></a>

```csharp
public string AvailableResourceInput { get; }
```

- *Type:* string

---

##### `AvailablePermissions`<sup>Required</sup> <a name="AvailablePermissions" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissions"></a>

```csharp
public string[] AvailablePermissions { get; }
```

- *Type:* string[]

---

##### `AvailableResource`<sup>Required</sup> <a name="AvailableResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResource"></a>

```csharp
public string AvailableResource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.internalValue"></a>

```csharp
public GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

---


### GoogleIamAccessBoundaryPolicyRulesList <a name="GoogleIamAccessBoundaryPolicyRulesList" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamAccessBoundaryPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.get"></a>

```csharp
private GoogleIamAccessBoundaryPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleIamAccessBoundaryPolicyRulesOutputReference <a name="GoogleIamAccessBoundaryPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamAccessBoundaryPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule">PutAccessBoundaryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resetAccessBoundaryRule">ResetAccessBoundaryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessBoundaryRule` <a name="PutAccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule"></a>

```csharp
private void PutAccessBoundaryRule(GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

---

##### `ResetAccessBoundaryRule` <a name="ResetAccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resetAccessBoundaryRule"></a>

```csharp
private void ResetAccessBoundaryRule()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRule">AccessBoundaryRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRuleInput">AccessBoundaryRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessBoundaryRule`<sup>Required</sup> <a name="AccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRule"></a>

```csharp
public GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference AccessBoundaryRule { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference</a>

---

##### `AccessBoundaryRuleInput`<sup>Optional</sup> <a name="AccessBoundaryRuleInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRuleInput"></a>

```csharp
public GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule AccessBoundaryRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleIamAccessBoundaryPolicyTimeoutsOutputReference <a name="GoogleIamAccessBoundaryPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIamAccessBoundaryPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



