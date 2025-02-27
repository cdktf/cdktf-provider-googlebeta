# `googleDnsResponsePolicyRule` Submodule <a name="`googleDnsResponsePolicyRule` Submodule" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDnsResponsePolicyRule <a name="GoogleDnsResponsePolicyRule" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule google_dns_response_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsResponsePolicyRule(Construct Scope, string Id, GoogleDnsResponsePolicyRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig">GoogleDnsResponsePolicyRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig">GoogleDnsResponsePolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.putLocalData">PutLocalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetBehavior">ResetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetLocalData">ResetLocalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocalData` <a name="PutLocalData" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.putLocalData"></a>

```csharp
private void PutLocalData(GoogleDnsResponsePolicyRuleLocalData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.putLocalData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDnsResponsePolicyRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts">GoogleDnsResponsePolicyRuleTimeouts</a>

---

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetBehavior"></a>

```csharp
private void ResetBehavior()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocalData` <a name="ResetLocalData" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetLocalData"></a>

```csharp
private void ResetLocalData()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDnsResponsePolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDnsResponsePolicyRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDnsResponsePolicyRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDnsResponsePolicyRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDnsResponsePolicyRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDnsResponsePolicyRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDnsResponsePolicyRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDnsResponsePolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDnsResponsePolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.localData">LocalData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference">GoogleDnsResponsePolicyRuleLocalDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference">GoogleDnsResponsePolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.behaviorInput">BehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.dnsNameInput">DnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.localDataInput">LocalDataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.responsePolicyInput">ResponsePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.behavior">Behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.responsePolicy">ResponsePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LocalData`<sup>Required</sup> <a name="LocalData" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.localData"></a>

```csharp
public GoogleDnsResponsePolicyRuleLocalDataOutputReference LocalData { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference">GoogleDnsResponsePolicyRuleLocalDataOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.timeouts"></a>

```csharp
public GoogleDnsResponsePolicyRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference">GoogleDnsResponsePolicyRuleTimeoutsOutputReference</a>

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.behaviorInput"></a>

```csharp
public string BehaviorInput { get; }
```

- *Type:* string

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.dnsNameInput"></a>

```csharp
public string DnsNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalDataInput`<sup>Optional</sup> <a name="LocalDataInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.localDataInput"></a>

```csharp
public GoogleDnsResponsePolicyRuleLocalData LocalDataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResponsePolicyInput`<sup>Optional</sup> <a name="ResponsePolicyInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.responsePolicyInput"></a>

```csharp
public string ResponsePolicyInput { get; }
```

- *Type:* string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.behavior"></a>

```csharp
public string Behavior { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ResponsePolicy`<sup>Required</sup> <a name="ResponsePolicy" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.responsePolicy"></a>

```csharp
public string ResponsePolicy { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDnsResponsePolicyRuleConfig <a name="GoogleDnsResponsePolicyRuleConfig" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsResponsePolicyRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DnsName,
    string ResponsePolicy,
    string RuleName,
    string Behavior = null,
    string Id = null,
    GoogleDnsResponsePolicyRuleLocalData LocalData = null,
    string Project = null,
    GoogleDnsResponsePolicyRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.dnsName">DnsName</a></code> | <code>string</code> | The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.responsePolicy">ResponsePolicy</a></code> | <code>string</code> | Identifies the response policy addressed by this request. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.ruleName">RuleName</a></code> | <code>string</code> | An identifier for this rule. Must be unique with the ResponsePolicy. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.behavior">Behavior</a></code> | <code>string</code> | Answer this query with a behavior rather than DNS data. Acceptable values are 'behaviorUnspecified', and 'bypassResponsePolicy'. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#id GoogleDnsResponsePolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.localData">LocalData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a></code> | local_data block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#project GoogleDnsResponsePolicyRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts">GoogleDnsResponsePolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.dnsName"></a>

```csharp
public string DnsName { get; set; }
```

- *Type:* string

The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#dns_name GoogleDnsResponsePolicyRule#dns_name}

---

##### `ResponsePolicy`<sup>Required</sup> <a name="ResponsePolicy" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.responsePolicy"></a>

```csharp
public string ResponsePolicy { get; set; }
```

- *Type:* string

Identifies the response policy addressed by this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#response_policy GoogleDnsResponsePolicyRule#response_policy}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

An identifier for this rule. Must be unique with the ResponsePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#rule_name GoogleDnsResponsePolicyRule#rule_name}

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.behavior"></a>

```csharp
public string Behavior { get; set; }
```

- *Type:* string

Answer this query with a behavior rather than DNS data. Acceptable values are 'behaviorUnspecified', and 'bypassResponsePolicy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#behavior GoogleDnsResponsePolicyRule#behavior}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#id GoogleDnsResponsePolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalData`<sup>Optional</sup> <a name="LocalData" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.localData"></a>

```csharp
public GoogleDnsResponsePolicyRuleLocalData LocalData { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a>

local_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#local_data GoogleDnsResponsePolicyRule#local_data}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#project GoogleDnsResponsePolicyRule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleConfig.property.timeouts"></a>

```csharp
public GoogleDnsResponsePolicyRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts">GoogleDnsResponsePolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#timeouts GoogleDnsResponsePolicyRule#timeouts}

---

### GoogleDnsResponsePolicyRuleLocalData <a name="GoogleDnsResponsePolicyRuleLocalData" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsResponsePolicyRuleLocalData {
    object LocalDatas
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData.property.localDatas">LocalDatas</a></code> | <code>object</code> | local_datas block. |

---

##### `LocalDatas`<sup>Required</sup> <a name="LocalDatas" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData.property.localDatas"></a>

```csharp
public object LocalDatas { get; set; }
```

- *Type:* object

local_datas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#local_datas GoogleDnsResponsePolicyRule#local_datas}

---

### GoogleDnsResponsePolicyRuleLocalDataLocalDatas <a name="GoogleDnsResponsePolicyRuleLocalDataLocalDatas" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsResponsePolicyRuleLocalDataLocalDatas {
    string Name,
    string Type,
    string[] Rrdatas = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.name">Name</a></code> | <code>string</code> | For example, www.example.com. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.type">Type</a></code> | <code>string</code> | One of valid DNS resource types. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1). |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.ttl">Ttl</a></code> | <code>double</code> | Number of seconds that this ResourceRecordSet can be cached by resolvers. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

For example, www.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#name GoogleDnsResponsePolicyRule#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

One of valid DNS resource types.

Possible values: ["A", "AAAA", "CAA", "CNAME", "DNSKEY", "DS", "HTTPS", "IPSECVPNKEY", "MX", "NAPTR", "NS", "PTR", "SOA", "SPF", "SRV", "SSHFP", "SVCB", "TLSA", "TXT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#type GoogleDnsResponsePolicyRule#type}

---

##### `Rrdatas`<sup>Optional</sup> <a name="Rrdatas" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; set; }
```

- *Type:* string[]

As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#rrdatas GoogleDnsResponsePolicyRule#rrdatas}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatas.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Number of seconds that this ResourceRecordSet can be cached by resolvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#ttl GoogleDnsResponsePolicyRule#ttl}

---

### GoogleDnsResponsePolicyRuleTimeouts <a name="GoogleDnsResponsePolicyRuleTimeouts" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsResponsePolicyRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#create GoogleDnsResponsePolicyRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#delete GoogleDnsResponsePolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#update GoogleDnsResponsePolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#create GoogleDnsResponsePolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#delete GoogleDnsResponsePolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_response_policy_rule#update GoogleDnsResponsePolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDnsResponsePolicyRuleLocalDataLocalDatasList <a name="GoogleDnsResponsePolicyRuleLocalDataLocalDatasList" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsResponsePolicyRuleLocalDataLocalDatasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.get"></a>

```csharp
private GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference <a name="GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetRrdatas">ResetRrdatas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRrdatas` <a name="ResetRrdatas" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetRrdatas"></a>

```csharp
private void ResetRrdatas()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatasInput">RrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RrdatasInput`<sup>Optional</sup> <a name="RrdatasInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatasInput"></a>

```csharp
public string[] RrdatasInput { get; }
```

- *Type:* string[]

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rrdatas`<sup>Required</sup> <a name="Rrdatas" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsResponsePolicyRuleLocalDataOutputReference <a name="GoogleDnsResponsePolicyRuleLocalDataOutputReference" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsResponsePolicyRuleLocalDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas">PutLocalDatas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocalDatas` <a name="PutLocalDatas" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas"></a>

```csharp
private void PutLocalDatas(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.localDatas">LocalDatas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList">GoogleDnsResponsePolicyRuleLocalDataLocalDatasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.localDatasInput">LocalDatasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalDatas`<sup>Required</sup> <a name="LocalDatas" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.localDatas"></a>

```csharp
public GoogleDnsResponsePolicyRuleLocalDataLocalDatasList LocalDatas { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataLocalDatasList">GoogleDnsResponsePolicyRuleLocalDataLocalDatasList</a>

---

##### `LocalDatasInput`<sup>Optional</sup> <a name="LocalDatasInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.localDatasInput"></a>

```csharp
public object LocalDatasInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalDataOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsResponsePolicyRuleLocalData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleLocalData">GoogleDnsResponsePolicyRuleLocalData</a>

---


### GoogleDnsResponsePolicyRuleTimeoutsOutputReference <a name="GoogleDnsResponsePolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsResponsePolicyRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsResponsePolicyRule.GoogleDnsResponsePolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



