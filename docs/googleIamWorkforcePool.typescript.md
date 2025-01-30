# `googleIamWorkforcePool` Submodule <a name="`googleIamWorkforcePool` Submodule" id="@cdktf/provider-google-beta.googleIamWorkforcePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkforcePool <a name="GoogleIamWorkforcePool" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool google_iam_workforce_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.Initializer"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

new googleIamWorkforcePool.GoogleIamWorkforcePool(scope: Construct, id: string, config: GoogleIamWorkforcePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig">GoogleIamWorkforcePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig">GoogleIamWorkforcePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.putAccessRestrictions">putAccessRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetAccessRestrictions">resetAccessRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetSessionDuration">resetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessRestrictions` <a name="putAccessRestrictions" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.putAccessRestrictions"></a>

```typescript
public putAccessRestrictions(value: GoogleIamWorkforcePoolAccessRestrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.putAccessRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions">GoogleIamWorkforcePoolAccessRestrictions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIamWorkforcePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts">GoogleIamWorkforcePoolTimeouts</a>

---

##### `resetAccessRestrictions` <a name="resetAccessRestrictions" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetAccessRestrictions"></a>

```typescript
public resetAccessRestrictions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSessionDuration` <a name="resetSessionDuration" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetSessionDuration"></a>

```typescript
public resetSessionDuration(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkforcePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.isConstruct"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

googleIamWorkforcePool.GoogleIamWorkforcePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.isTerraformElement"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

googleIamWorkforcePool.GoogleIamWorkforcePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.isTerraformResource"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

googleIamWorkforcePool.GoogleIamWorkforcePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.generateConfigForImport"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

googleIamWorkforcePool.GoogleIamWorkforcePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIamWorkforcePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamWorkforcePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamWorkforcePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkforcePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.accessRestrictions">accessRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference">GoogleIamWorkforcePoolAccessRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference">GoogleIamWorkforcePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.accessRestrictionsInput">accessRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions">GoogleIamWorkforcePoolAccessRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.sessionDurationInput">sessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts">GoogleIamWorkforcePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.sessionDuration">sessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessRestrictions`<sup>Required</sup> <a name="accessRestrictions" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.accessRestrictions"></a>

```typescript
public readonly accessRestrictions: GoogleIamWorkforcePoolAccessRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference">GoogleIamWorkforcePoolAccessRestrictionsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamWorkforcePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference">GoogleIamWorkforcePoolTimeoutsOutputReference</a>

---

##### `accessRestrictionsInput`<sup>Optional</sup> <a name="accessRestrictionsInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.accessRestrictionsInput"></a>

```typescript
public readonly accessRestrictionsInput: GoogleIamWorkforcePoolAccessRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions">GoogleIamWorkforcePoolAccessRestrictions</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `sessionDurationInput`<sup>Optional</sup> <a name="sessionDurationInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.sessionDurationInput"></a>

```typescript
public readonly sessionDurationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIamWorkforcePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts">GoogleIamWorkforcePoolTimeouts</a>

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.workforcePoolIdInput"></a>

```typescript
public readonly workforcePoolIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: string;
```

- *Type:* string

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkforcePoolAccessRestrictions <a name="GoogleIamWorkforcePoolAccessRestrictions" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions.Initializer"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolAccessRestrictions: googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions.property.allowedServices">allowedServices</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices">GoogleIamWorkforcePoolAccessRestrictionsAllowedServices</a>[]</code> | allowed_services block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions.property.disableProgrammaticSignin">disableProgrammaticSignin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable programmatic sign-in by disabling token issue via the Security Token API endpoint. See [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest). |

---

##### `allowedServices`<sup>Optional</sup> <a name="allowedServices" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions.property.allowedServices"></a>

```typescript
public readonly allowedServices: IResolvable | GoogleIamWorkforcePoolAccessRestrictionsAllowedServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices">GoogleIamWorkforcePoolAccessRestrictionsAllowedServices</a>[]

allowed_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#allowed_services GoogleIamWorkforcePool#allowed_services}

---

##### `disableProgrammaticSignin`<sup>Optional</sup> <a name="disableProgrammaticSignin" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions.property.disableProgrammaticSignin"></a>

```typescript
public readonly disableProgrammaticSignin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable programmatic sign-in by disabling token issue via the Security Token API endpoint. See [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#disable_programmatic_signin GoogleIamWorkforcePool#disable_programmatic_signin}

---

### GoogleIamWorkforcePoolAccessRestrictionsAllowedServices <a name="GoogleIamWorkforcePoolAccessRestrictionsAllowedServices" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices.Initializer"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolAccessRestrictionsAllowedServices: googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices.property.domain">domain</a></code> | <code>string</code> | Domain name of the service. Example: console.cloud.google. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain name of the service. Example: console.cloud.google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#domain GoogleIamWorkforcePool#domain}

---

### GoogleIamWorkforcePoolConfig <a name="GoogleIamWorkforcePoolConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.Initializer"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolConfig: googleIamWorkforcePool.GoogleIamWorkforcePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.parent">parent</a></code> | <code>string</code> | Immutable. The resource name of the parent. Format: 'organizations/{org-id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | The name of the pool. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.accessRestrictions">accessRestrictions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions">GoogleIamWorkforcePoolAccessRestrictions</a></code> | access_restrictions block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.description">description</a></code> | <code>string</code> | A user-specified description of the pool. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the pool is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#id GoogleIamWorkforcePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.sessionDuration">sessionDuration</a></code> | <code>string</code> | Duration that the Google Cloud access tokens, console sign-in sessions, and 'gcloud' sign-in sessions from this pool are valid. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts">GoogleIamWorkforcePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#location GoogleIamWorkforcePool#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Immutable. The resource name of the parent. Format: 'organizations/{org-id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#parent GoogleIamWorkforcePool#parent}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

The name of the pool.

The ID must be a globally unique string of 6 to 63 lowercase letters,
digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#workforce_pool_id GoogleIamWorkforcePool#workforce_pool_id}

---

##### `accessRestrictions`<sup>Optional</sup> <a name="accessRestrictions" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.accessRestrictions"></a>

```typescript
public readonly accessRestrictions: GoogleIamWorkforcePoolAccessRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions">GoogleIamWorkforcePoolAccessRestrictions</a>

access_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#access_restrictions GoogleIamWorkforcePool#access_restrictions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A user-specified description of the pool. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#description GoogleIamWorkforcePool#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the pool is disabled.

You cannot use a disabled pool to exchange tokens,
or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#disabled GoogleIamWorkforcePool#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#display_name GoogleIamWorkforcePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#id GoogleIamWorkforcePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: string;
```

- *Type:* string

Duration that the Google Cloud access tokens, console sign-in sessions, and 'gcloud' sign-in sessions from this pool are valid.

Must be greater than 15 minutes (900s) and less than 12 hours (43200s).
If 'sessionDuration' is not configured, minted credentials have a default duration of one hour (3600s).
A duration in seconds with up to nine fractional digits, ending with ''s''. Example: "'3.5s'".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#session_duration GoogleIamWorkforcePool#session_duration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamWorkforcePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts">GoogleIamWorkforcePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#timeouts GoogleIamWorkforcePool#timeouts}

---

### GoogleIamWorkforcePoolTimeouts <a name="GoogleIamWorkforcePoolTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts.Initializer"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolTimeouts: googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#create GoogleIamWorkforcePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#delete GoogleIamWorkforcePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#update GoogleIamWorkforcePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#create GoogleIamWorkforcePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#delete GoogleIamWorkforcePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iam_workforce_pool#update GoogleIamWorkforcePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList <a name="GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

new googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.get"></a>

```typescript
public get(index: number): GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices">GoogleIamWorkforcePoolAccessRestrictionsAllowedServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamWorkforcePoolAccessRestrictionsAllowedServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices">GoogleIamWorkforcePoolAccessRestrictionsAllowedServices</a>[]

---


### GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference <a name="GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

new googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resetDomain">resetDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices">GoogleIamWorkforcePoolAccessRestrictionsAllowedServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamWorkforcePoolAccessRestrictionsAllowedServices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices">GoogleIamWorkforcePoolAccessRestrictionsAllowedServices</a>

---


### GoogleIamWorkforcePoolAccessRestrictionsOutputReference <a name="GoogleIamWorkforcePoolAccessRestrictionsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

new googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.putAllowedServices">putAllowedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.resetAllowedServices">resetAllowedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.resetDisableProgrammaticSignin">resetDisableProgrammaticSignin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedServices` <a name="putAllowedServices" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.putAllowedServices"></a>

```typescript
public putAllowedServices(value: IResolvable | GoogleIamWorkforcePoolAccessRestrictionsAllowedServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.putAllowedServices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices">GoogleIamWorkforcePoolAccessRestrictionsAllowedServices</a>[]

---

##### `resetAllowedServices` <a name="resetAllowedServices" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.resetAllowedServices"></a>

```typescript
public resetAllowedServices(): void
```

##### `resetDisableProgrammaticSignin` <a name="resetDisableProgrammaticSignin" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.resetDisableProgrammaticSignin"></a>

```typescript
public resetDisableProgrammaticSignin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.allowedServices">allowedServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList">GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.allowedServicesInput">allowedServicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices">GoogleIamWorkforcePoolAccessRestrictionsAllowedServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.disableProgrammaticSigninInput">disableProgrammaticSigninInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.disableProgrammaticSignin">disableProgrammaticSignin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions">GoogleIamWorkforcePoolAccessRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedServices`<sup>Required</sup> <a name="allowedServices" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.allowedServices"></a>

```typescript
public readonly allowedServices: GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList">GoogleIamWorkforcePoolAccessRestrictionsAllowedServicesList</a>

---

##### `allowedServicesInput`<sup>Optional</sup> <a name="allowedServicesInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.allowedServicesInput"></a>

```typescript
public readonly allowedServicesInput: IResolvable | GoogleIamWorkforcePoolAccessRestrictionsAllowedServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsAllowedServices">GoogleIamWorkforcePoolAccessRestrictionsAllowedServices</a>[]

---

##### `disableProgrammaticSigninInput`<sup>Optional</sup> <a name="disableProgrammaticSigninInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.disableProgrammaticSigninInput"></a>

```typescript
public readonly disableProgrammaticSigninInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableProgrammaticSignin`<sup>Required</sup> <a name="disableProgrammaticSignin" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.disableProgrammaticSignin"></a>

```typescript
public readonly disableProgrammaticSignin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamWorkforcePoolAccessRestrictions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolAccessRestrictions">GoogleIamWorkforcePoolAccessRestrictions</a>

---


### GoogleIamWorkforcePoolTimeoutsOutputReference <a name="GoogleIamWorkforcePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePool } from '@cdktf/provider-google-beta'

new googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts">GoogleIamWorkforcePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamWorkforcePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkforcePool.GoogleIamWorkforcePoolTimeouts">GoogleIamWorkforcePoolTimeouts</a>

---



