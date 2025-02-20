# `googleOrganizationIamCustomRole` Submodule <a name="`googleOrganizationIamCustomRole` Submodule" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrganizationIamCustomRole <a name="GoogleOrganizationIamCustomRole" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role google_organization_iam_custom_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOrganizationIamCustomRole(Construct Scope, string Id, GoogleOrganizationIamCustomRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig">GoogleOrganizationIamCustomRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig">GoogleOrganizationIamCustomRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetStage">ResetStage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStage` <a name="ResetStage" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.resetStage"></a>

```csharp
private void ResetStage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOrganizationIamCustomRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleOrganizationIamCustomRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleOrganizationIamCustomRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleOrganizationIamCustomRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleOrganizationIamCustomRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleOrganizationIamCustomRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOrganizationIamCustomRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOrganizationIamCustomRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOrganizationIamCustomRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.deleted">Deleted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.permissionsInput">PermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.roleIdInput">RoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.stageInput">StageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.title">Title</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.deleted"></a>

```csharp
public IResolvable Deleted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.permissionsInput"></a>

```csharp
public string[] PermissionsInput { get; }
```

- *Type:* string[]

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.roleIdInput"></a>

```csharp
public string RoleIdInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.stageInput"></a>

```csharp
public string StageInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrganizationIamCustomRoleConfig <a name="GoogleOrganizationIamCustomRoleConfig" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOrganizationIamCustomRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OrgId,
    string[] Permissions,
    string RoleId,
    string Title,
    string Description = null,
    string Id = null,
    string Stage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.orgId">OrgId</a></code> | <code>string</code> | The numeric ID of the organization in which you want to create a custom role. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.permissions">Permissions</a></code> | <code>string[]</code> | The names of the permissions this role grants when bound in an IAM policy. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.roleId">RoleId</a></code> | <code>string</code> | The role id to use for this role. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.title">Title</a></code> | <code>string</code> | A human-readable title for the role. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description for the role. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#id GoogleOrganizationIamCustomRole#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.stage">Stage</a></code> | <code>string</code> | The current launch stage of the role. Defaults to GA. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The numeric ID of the organization in which you want to create a custom role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#org_id GoogleOrganizationIamCustomRole#org_id}

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.permissions"></a>

```csharp
public string[] Permissions { get; set; }
```

- *Type:* string[]

The names of the permissions this role grants when bound in an IAM policy.

At least one permission must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#permissions GoogleOrganizationIamCustomRole#permissions}

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.roleId"></a>

```csharp
public string RoleId { get; set; }
```

- *Type:* string

The role id to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#role_id GoogleOrganizationIamCustomRole#role_id}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

A human-readable title for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#title GoogleOrganizationIamCustomRole#title}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#description GoogleOrganizationIamCustomRole#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#id GoogleOrganizationIamCustomRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktf/provider-google-beta.googleOrganizationIamCustomRole.GoogleOrganizationIamCustomRoleConfig.property.stage"></a>

```csharp
public string Stage { get; set; }
```

- *Type:* string

The current launch stage of the role. Defaults to GA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_organization_iam_custom_role#stage GoogleOrganizationIamCustomRole#stage}

---



