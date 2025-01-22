# `googleAccessContextManagerAccessLevel` Submodule <a name="`googleAccessContextManagerAccessLevel` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerAccessLevel <a name="GoogleAccessContextManagerAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level google_access_context_manager_access_level}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel(scope: Construct, id: string, config: GoogleAccessContextManagerAccessLevelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig">GoogleAccessContextManagerAccessLevelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig">GoogleAccessContextManagerAccessLevelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putBasic">putBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetBasic">resetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBasic` <a name="putBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putBasic"></a>

```typescript
public putBasic(value: GoogleAccessContextManagerAccessLevelBasic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a>

---

##### `putCustom` <a name="putCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putCustom"></a>

```typescript
public putCustom(value: GoogleAccessContextManagerAccessLevelCustom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAccessContextManagerAccessLevelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts">GoogleAccessContextManagerAccessLevelTimeouts</a>

---

##### `resetBasic` <a name="resetBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetBasic"></a>

```typescript
public resetBasic(): void
```

##### `resetCustom` <a name="resetCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetCustom"></a>

```typescript
public resetCustom(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isConstruct"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformElement"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformResource"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAccessContextManagerAccessLevel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAccessContextManagerAccessLevel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerAccessLevel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference">GoogleAccessContextManagerAccessLevelBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference">GoogleAccessContextManagerAccessLevelCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.basicInput">basicInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.customInput">customInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts">GoogleAccessContextManagerAccessLevelTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.basic"></a>

```typescript
public readonly basic: GoogleAccessContextManagerAccessLevelBasicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference">GoogleAccessContextManagerAccessLevelBasicOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.custom"></a>

```typescript
public readonly custom: GoogleAccessContextManagerAccessLevelCustomOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference">GoogleAccessContextManagerAccessLevelCustomOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAccessContextManagerAccessLevelTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelTimeoutsOutputReference</a>

---

##### `basicInput`<sup>Optional</sup> <a name="basicInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.basicInput"></a>

```typescript
public readonly basicInput: GoogleAccessContextManagerAccessLevelBasic;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.customInput"></a>

```typescript
public readonly customInput: GoogleAccessContextManagerAccessLevelCustom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GoogleAccessContextManagerAccessLevelTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts">GoogleAccessContextManagerAccessLevelTimeouts</a> | cdktf.IResolvable

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerAccessLevelBasic <a name="GoogleAccessContextManagerAccessLevelBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelBasic: googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions">GoogleAccessContextManagerAccessLevelBasicConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic.property.combiningFunction">combiningFunction</a></code> | <code>string</code> | How the conditions list should be combined to determine if a request is granted this AccessLevel. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions">GoogleAccessContextManagerAccessLevelBasicConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#conditions GoogleAccessContextManagerAccessLevel#conditions}

---

##### `combiningFunction`<sup>Optional</sup> <a name="combiningFunction" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic.property.combiningFunction"></a>

```typescript
public readonly combiningFunction: string;
```

- *Type:* string

How the conditions list should be combined to determine if a request is granted this AccessLevel.

If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#combining_function GoogleAccessContextManagerAccessLevel#combining_function}

---

### GoogleAccessContextManagerAccessLevelBasicConditions <a name="GoogleAccessContextManagerAccessLevelBasicConditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelBasicConditions: googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.ipSubnetworks">ipSubnetworks</a></code> | <code>string[]</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.members">members</a></code> | <code>string[]</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.regions">regions</a></code> | <code>string[]</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.requiredAccessLevels">requiredAccessLevels</a></code> | <code>string[]</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.vpcNetworkSources">vpcNetworkSources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]</code> | vpc_network_sources block. |

---

##### `devicePolicy`<sup>Optional</sup> <a name="devicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.devicePolicy"></a>

```typescript
public readonly devicePolicy: GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#device_policy GoogleAccessContextManagerAccessLevel#device_policy}

---

##### `ipSubnetworks`<sup>Optional</sup> <a name="ipSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.ipSubnetworks"></a>

```typescript
public readonly ipSubnetworks: string[];
```

- *Type:* string[]

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#ip_subnetworks GoogleAccessContextManagerAccessLevel#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#members GoogleAccessContextManagerAccessLevel#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#negate GoogleAccessContextManagerAccessLevel#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#regions GoogleAccessContextManagerAccessLevel#regions}

---

##### `requiredAccessLevels`<sup>Optional</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.requiredAccessLevels"></a>

```typescript
public readonly requiredAccessLevels: string[];
```

- *Type:* string[]

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#required_access_levels GoogleAccessContextManagerAccessLevel#required_access_levels}

---

##### `vpcNetworkSources`<sup>Optional</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions.property.vpcNetworkSources"></a>

```typescript
public readonly vpcNetworkSources: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#vpc_network_sources GoogleAccessContextManagerAccessLevel#vpc_network_sources}

---

### GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy <a name="GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelBasicConditionsDevicePolicy: googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels">allowedDeviceManagementLevels</a></code> | <code>string[]</code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedEncryptionStatuses">allowedEncryptionStatuses</a></code> | <code>string[]</code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.osConstraints">osConstraints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]</code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireAdminApproval">requireAdminApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireCorpOwned">requireCorpOwned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireScreenLock">requireScreenLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `allowedDeviceManagementLevels`<sup>Optional</sup> <a name="allowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels"></a>

```typescript
public readonly allowedDeviceManagementLevels: string[];
```

- *Type:* string[]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#allowed_device_management_levels GoogleAccessContextManagerAccessLevel#allowed_device_management_levels}

---

##### `allowedEncryptionStatuses`<sup>Optional</sup> <a name="allowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedEncryptionStatuses"></a>

```typescript
public readonly allowedEncryptionStatuses: string[];
```

- *Type:* string[]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#allowed_encryption_statuses GoogleAccessContextManagerAccessLevel#allowed_encryption_statuses}

---

##### `osConstraints`<sup>Optional</sup> <a name="osConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.osConstraints"></a>

```typescript
public readonly osConstraints: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#os_constraints GoogleAccessContextManagerAccessLevel#os_constraints}

---

##### `requireAdminApproval`<sup>Optional</sup> <a name="requireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireAdminApproval"></a>

```typescript
public readonly requireAdminApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#require_admin_approval GoogleAccessContextManagerAccessLevel#require_admin_approval}

---

##### `requireCorpOwned`<sup>Optional</sup> <a name="requireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireCorpOwned"></a>

```typescript
public readonly requireCorpOwned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#require_corp_owned GoogleAccessContextManagerAccessLevel#require_corp_owned}

---

##### `requireScreenLock`<sup>Optional</sup> <a name="requireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireScreenLock"></a>

```typescript
public readonly requireScreenLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#require_screen_lock GoogleAccessContextManagerAccessLevel#require_screen_lock}

---

### GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints <a name="GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints: googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.osType">osType</a></code> | <code>string</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.minimumVersion">minimumVersion</a></code> | <code>string</code> | The minimum allowed OS version. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.requireVerifiedChromeOs">requireVerifiedChromeOs</a></code> | <code>boolean \| cdktf.IResolvable</code> | If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access. |

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#os_type GoogleAccessContextManagerAccessLevel#os_type}

---

##### `minimumVersion`<sup>Optional</sup> <a name="minimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.minimumVersion"></a>

```typescript
public readonly minimumVersion: string;
```

- *Type:* string

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#minimum_version GoogleAccessContextManagerAccessLevel#minimum_version}

---

##### `requireVerifiedChromeOs`<sup>Optional</sup> <a name="requireVerifiedChromeOs" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.requireVerifiedChromeOs"></a>

```typescript
public readonly requireVerifiedChromeOs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#require_verified_chrome_os GoogleAccessContextManagerAccessLevel#require_verified_chrome_os}

---

### GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources <a name="GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources: googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources.property.vpcSubnetwork">vpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | vpc_subnetwork block. |

---

##### `vpcSubnetwork`<sup>Optional</sup> <a name="vpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources.property.vpcSubnetwork"></a>

```typescript
public readonly vpcSubnetwork: GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

vpc_subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#vpc_subnetwork GoogleAccessContextManagerAccessLevel#vpc_subnetwork}

---

### GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork <a name="GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork: googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network">network</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks">vpcIpSubnetworks</a></code> | <code>string[]</code> | A list of CIDR block IP subnetwork specification. Must be IPv4. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#network GoogleAccessContextManagerAccessLevel#network}

---

##### `vpcIpSubnetworks`<sup>Optional</sup> <a name="vpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks"></a>

```typescript
public readonly vpcIpSubnetworks: string[];
```

- *Type:* string[]

A list of CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#vpc_ip_subnetworks GoogleAccessContextManagerAccessLevel#vpc_ip_subnetworks}

---

### GoogleAccessContextManagerAccessLevelConfig <a name="GoogleAccessContextManagerAccessLevelConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelConfig: googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.name">name</a></code> | <code>string</code> | Resource name for the Access Level. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.parent">parent</a></code> | <code>string</code> | The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.title">title</a></code> | <code>string</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a></code> | custom block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.description">description</a></code> | <code>string</code> | Description of the AccessLevel and its use. Does not affect behavior. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#id GoogleAccessContextManagerAccessLevel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts">GoogleAccessContextManagerAccessLevelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Resource name for the Access Level.

The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#name GoogleAccessContextManagerAccessLevel#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#parent GoogleAccessContextManagerAccessLevel#parent}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#title GoogleAccessContextManagerAccessLevel#title}

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.basic"></a>

```typescript
public readonly basic: GoogleAccessContextManagerAccessLevelBasic;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#basic GoogleAccessContextManagerAccessLevel#basic}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.custom"></a>

```typescript
public readonly custom: GoogleAccessContextManagerAccessLevelCustom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#custom GoogleAccessContextManagerAccessLevel#custom}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the AccessLevel and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#description GoogleAccessContextManagerAccessLevel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#id GoogleAccessContextManagerAccessLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAccessContextManagerAccessLevelTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts">GoogleAccessContextManagerAccessLevelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#timeouts GoogleAccessContextManagerAccessLevel#timeouts}

---

### GoogleAccessContextManagerAccessLevelCustom <a name="GoogleAccessContextManagerAccessLevelCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelCustom: googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a></code> | expr block. |

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom.property.expr"></a>

```typescript
public readonly expr: GoogleAccessContextManagerAccessLevelCustomExpr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#expr GoogleAccessContextManagerAccessLevel#expr}

---

### GoogleAccessContextManagerAccessLevelCustomExpr <a name="GoogleAccessContextManagerAccessLevelCustomExpr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelCustomExpr: googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#expression GoogleAccessContextManagerAccessLevel#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#description GoogleAccessContextManagerAccessLevel#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#location GoogleAccessContextManagerAccessLevel#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#title GoogleAccessContextManagerAccessLevel#title}

---

### GoogleAccessContextManagerAccessLevelTimeouts <a name="GoogleAccessContextManagerAccessLevelTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

const googleAccessContextManagerAccessLevelTimeouts: googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#create GoogleAccessContextManagerAccessLevel#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#delete GoogleAccessContextManagerAccessLevel#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#update GoogleAccessContextManagerAccessLevel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#create GoogleAccessContextManagerAccessLevel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#delete GoogleAccessContextManagerAccessLevel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_access_level#update GoogleAccessContextManagerAccessLevel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList <a name="GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]

---


### GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference <a name="GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">resetMinimumVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetRequireVerifiedChromeOs">resetRequireVerifiedChromeOs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumVersion` <a name="resetMinimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```typescript
public resetMinimumVersion(): void
```

##### `resetRequireVerifiedChromeOs` <a name="resetRequireVerifiedChromeOs" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetRequireVerifiedChromeOs"></a>

```typescript
public resetRequireVerifiedChromeOs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">minimumVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput">osTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOsInput">requireVerifiedChromeOsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion">minimumVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOs">requireVerifiedChromeOs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minimumVersionInput`<sup>Optional</sup> <a name="minimumVersionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```typescript
public readonly minimumVersionInput: string;
```

- *Type:* string

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```typescript
public readonly osTypeInput: string;
```

- *Type:* string

---

##### `requireVerifiedChromeOsInput`<sup>Optional</sup> <a name="requireVerifiedChromeOsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOsInput"></a>

```typescript
public readonly requireVerifiedChromeOsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minimumVersion`<sup>Required</sup> <a name="minimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```typescript
public readonly minimumVersion: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `requireVerifiedChromeOs`<sup>Required</sup> <a name="requireVerifiedChromeOs" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOs"></a>

```typescript
public readonly requireVerifiedChromeOs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a> | cdktf.IResolvable

---


### GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference <a name="GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.putOsConstraints">putOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">resetAllowedDeviceManagementLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses">resetAllowedEncryptionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetOsConstraints">resetOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval">resetRequireAdminApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned">resetRequireCorpOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock">resetRequireScreenLock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOsConstraints` <a name="putOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.putOsConstraints"></a>

```typescript
public putOsConstraints(value: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]

---

##### `resetAllowedDeviceManagementLevels` <a name="resetAllowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```typescript
public resetAllowedDeviceManagementLevels(): void
```

##### `resetAllowedEncryptionStatuses` <a name="resetAllowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```typescript
public resetAllowedEncryptionStatuses(): void
```

##### `resetOsConstraints` <a name="resetOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetOsConstraints"></a>

```typescript
public resetOsConstraints(): void
```

##### `resetRequireAdminApproval` <a name="resetRequireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```typescript
public resetRequireAdminApproval(): void
```

##### `resetRequireCorpOwned` <a name="resetRequireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```typescript
public resetRequireCorpOwned(): void
```

##### `resetRequireScreenLock` <a name="resetRequireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock"></a>

```typescript
public resetRequireScreenLock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraints">osConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">allowedDeviceManagementLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">allowedEncryptionStatusesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput">osConstraintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput">requireAdminApprovalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput">requireCorpOwnedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput">requireScreenLockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels">allowedDeviceManagementLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses">allowedEncryptionStatuses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval">requireAdminApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned">requireCorpOwned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLock">requireScreenLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `osConstraints`<sup>Required</sup> <a name="osConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraints"></a>

```typescript
public readonly osConstraints: GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList</a>

---

##### `allowedDeviceManagementLevelsInput`<sup>Optional</sup> <a name="allowedDeviceManagementLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```typescript
public readonly allowedDeviceManagementLevelsInput: string[];
```

- *Type:* string[]

---

##### `allowedEncryptionStatusesInput`<sup>Optional</sup> <a name="allowedEncryptionStatusesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```typescript
public readonly allowedEncryptionStatusesInput: string[];
```

- *Type:* string[]

---

##### `osConstraintsInput`<sup>Optional</sup> <a name="osConstraintsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput"></a>

```typescript
public readonly osConstraintsInput: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>[]

---

##### `requireAdminApprovalInput`<sup>Optional</sup> <a name="requireAdminApprovalInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```typescript
public readonly requireAdminApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireCorpOwnedInput`<sup>Optional</sup> <a name="requireCorpOwnedInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```typescript
public readonly requireCorpOwnedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireScreenLockInput`<sup>Optional</sup> <a name="requireScreenLockInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```typescript
public readonly requireScreenLockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDeviceManagementLevels`<sup>Required</sup> <a name="allowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```typescript
public readonly allowedDeviceManagementLevels: string[];
```

- *Type:* string[]

---

##### `allowedEncryptionStatuses`<sup>Required</sup> <a name="allowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```typescript
public readonly allowedEncryptionStatuses: string[];
```

- *Type:* string[]

---

##### `requireAdminApproval`<sup>Required</sup> <a name="requireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval"></a>

```typescript
public readonly requireAdminApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireCorpOwned`<sup>Required</sup> <a name="requireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned"></a>

```typescript
public readonly requireCorpOwned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireScreenLock`<sup>Required</sup> <a name="requireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLock"></a>

```typescript
public readonly requireScreenLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

---


### GoogleAccessContextManagerAccessLevelBasicConditionsList <a name="GoogleAccessContextManagerAccessLevelBasicConditionsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions">GoogleAccessContextManagerAccessLevelBasicConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions">GoogleAccessContextManagerAccessLevelBasicConditions</a>[]

---


### GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference <a name="GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy">putDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.putVpcNetworkSources">putVpcNetworkSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetDevicePolicy">resetDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetIpSubnetworks">resetIpSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetRequiredAccessLevels">resetRequiredAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetVpcNetworkSources">resetVpcNetworkSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDevicePolicy` <a name="putDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy"></a>

```typescript
public putDevicePolicy(value: GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

---

##### `putVpcNetworkSources` <a name="putVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.putVpcNetworkSources"></a>

```typescript
public putVpcNetworkSources(value: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.putVpcNetworkSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]

---

##### `resetDevicePolicy` <a name="resetDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetDevicePolicy"></a>

```typescript
public resetDevicePolicy(): void
```

##### `resetIpSubnetworks` <a name="resetIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetIpSubnetworks"></a>

```typescript
public resetIpSubnetworks(): void
```

##### `resetMembers` <a name="resetMembers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetMembers"></a>

```typescript
public resetMembers(): void
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetNegate"></a>

```typescript
public resetNegate(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```

##### `resetRequiredAccessLevels` <a name="resetRequiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetRequiredAccessLevels"></a>

```typescript
public resetRequiredAccessLevels(): void
```

##### `resetVpcNetworkSources` <a name="resetVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.resetVpcNetworkSources"></a>

```typescript
public resetVpcNetworkSources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSources">vpcNetworkSources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicyInput">devicePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworksInput">ipSubnetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.negateInput">negateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevelsInput">requiredAccessLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSourcesInput">vpcNetworkSourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworks">ipSubnetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.negate">negate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevels">requiredAccessLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions">GoogleAccessContextManagerAccessLevelBasicConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicy"></a>

```typescript
public readonly devicePolicy: GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference</a>

---

##### `vpcNetworkSources`<sup>Required</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSources"></a>

```typescript
public readonly vpcNetworkSources: GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList</a>

---

##### `devicePolicyInput`<sup>Optional</sup> <a name="devicePolicyInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicyInput"></a>

```typescript
public readonly devicePolicyInput: GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

---

##### `ipSubnetworksInput`<sup>Optional</sup> <a name="ipSubnetworksInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworksInput"></a>

```typescript
public readonly ipSubnetworksInput: string[];
```

- *Type:* string[]

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.negateInput"></a>

```typescript
public readonly negateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `requiredAccessLevelsInput`<sup>Optional</sup> <a name="requiredAccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevelsInput"></a>

```typescript
public readonly requiredAccessLevelsInput: string[];
```

- *Type:* string[]

---

##### `vpcNetworkSourcesInput`<sup>Optional</sup> <a name="vpcNetworkSourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSourcesInput"></a>

```typescript
public readonly vpcNetworkSourcesInput: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]

---

##### `ipSubnetworks`<sup>Required</sup> <a name="ipSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworks"></a>

```typescript
public readonly ipSubnetworks: string[];
```

- *Type:* string[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.negate"></a>

```typescript
public readonly negate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `requiredAccessLevels`<sup>Required</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevels"></a>

```typescript
public readonly requiredAccessLevels: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions">GoogleAccessContextManagerAccessLevelBasicConditions</a>

---


### GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList <a name="GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>[]

---


### GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference <a name="GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork">putVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork">resetVpcSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcSubnetwork` <a name="putVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork"></a>

```typescript
public putVpcSubnetwork(value: GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `resetVpcSubnetwork` <a name="resetVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork"></a>

```typescript
public resetVpcSubnetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork">vpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput">vpcSubnetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcSubnetwork`<sup>Required</sup> <a name="vpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork"></a>

```typescript
public readonly vpcSubnetwork: GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a>

---

##### `vpcSubnetworkInput`<sup>Optional</sup> <a name="vpcSubnetworkInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput"></a>

```typescript
public readonly vpcSubnetworkInput: GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>

---


### GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference <a name="GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks">resetVpcIpSubnetworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcIpSubnetworks` <a name="resetVpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks"></a>

```typescript
public resetVpcIpSubnetworks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput">vpcIpSubnetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks">vpcIpSubnetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `vpcIpSubnetworksInput`<sup>Optional</sup> <a name="vpcIpSubnetworksInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput"></a>

```typescript
public readonly vpcIpSubnetworksInput: string[];
```

- *Type:* string[]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `vpcIpSubnetworks`<sup>Required</sup> <a name="vpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks"></a>

```typescript
public readonly vpcIpSubnetworks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---


### GoogleAccessContextManagerAccessLevelBasicOutputReference <a name="GoogleAccessContextManagerAccessLevelBasicOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.resetCombiningFunction">resetCombiningFunction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions">GoogleAccessContextManagerAccessLevelBasicConditions</a>[]

---

##### `resetCombiningFunction` <a name="resetCombiningFunction" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.resetCombiningFunction"></a>

```typescript
public resetCombiningFunction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList">GoogleAccessContextManagerAccessLevelBasicConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.combiningFunctionInput">combiningFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions">GoogleAccessContextManagerAccessLevelBasicConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.combiningFunction">combiningFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GoogleAccessContextManagerAccessLevelBasicConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditionsList">GoogleAccessContextManagerAccessLevelBasicConditionsList</a>

---

##### `combiningFunctionInput`<sup>Optional</sup> <a name="combiningFunctionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.combiningFunctionInput"></a>

```typescript
public readonly combiningFunctionInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | GoogleAccessContextManagerAccessLevelBasicConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicConditions">GoogleAccessContextManagerAccessLevelBasicConditions</a>[]

---

##### `combiningFunction`<sup>Required</sup> <a name="combiningFunction" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.combiningFunction"></a>

```typescript
public readonly combiningFunction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerAccessLevelBasic;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelBasic">GoogleAccessContextManagerAccessLevelBasic</a>

---


### GoogleAccessContextManagerAccessLevelCustomExprOutputReference <a name="GoogleAccessContextManagerAccessLevelCustomExprOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerAccessLevelCustomExpr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a>

---


### GoogleAccessContextManagerAccessLevelCustomOutputReference <a name="GoogleAccessContextManagerAccessLevelCustomOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.putExpr">putExpr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpr` <a name="putExpr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.putExpr"></a>

```typescript
public putExpr(value: GoogleAccessContextManagerAccessLevelCustomExpr): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference">GoogleAccessContextManagerAccessLevelCustomExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.exprInput">exprInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.expr"></a>

```typescript
public readonly expr: GoogleAccessContextManagerAccessLevelCustomExprOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExprOutputReference">GoogleAccessContextManagerAccessLevelCustomExprOutputReference</a>

---

##### `exprInput`<sup>Optional</sup> <a name="exprInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.exprInput"></a>

```typescript
public readonly exprInput: GoogleAccessContextManagerAccessLevelCustomExpr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomExpr">GoogleAccessContextManagerAccessLevelCustomExpr</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerAccessLevelCustom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelCustom">GoogleAccessContextManagerAccessLevelCustom</a>

---


### GoogleAccessContextManagerAccessLevelTimeoutsOutputReference <a name="GoogleAccessContextManagerAccessLevelTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerAccessLevel } from '@cdktf/provider-google-beta'

new googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts">GoogleAccessContextManagerAccessLevelTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerAccessLevelTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevel.GoogleAccessContextManagerAccessLevelTimeouts">GoogleAccessContextManagerAccessLevelTimeouts</a> | cdktf.IResolvable

---



