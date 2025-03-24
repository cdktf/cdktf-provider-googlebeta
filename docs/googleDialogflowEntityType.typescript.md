# `googleDialogflowEntityType` Submodule <a name="`googleDialogflowEntityType` Submodule" id="@cdktf/provider-google-beta.googleDialogflowEntityType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowEntityType <a name="GoogleDialogflowEntityType" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type google_dialogflow_entity_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer"></a>

```typescript
import { googleDialogflowEntityType } from '@cdktf/provider-google-beta'

new googleDialogflowEntityType.GoogleDialogflowEntityType(scope: Construct, id: string, config: GoogleDialogflowEntityTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig">GoogleDialogflowEntityTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig">GoogleDialogflowEntityTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.putEntities">putEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetEnableFuzzyExtraction">resetEnableFuzzyExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetEntities">resetEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntities` <a name="putEntities" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.putEntities"></a>

```typescript
public putEntities(value: IResolvable | GoogleDialogflowEntityTypeEntities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.putEntities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowEntityTypeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a>

---

##### `resetEnableFuzzyExtraction` <a name="resetEnableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetEnableFuzzyExtraction"></a>

```typescript
public resetEnableFuzzyExtraction(): void
```

##### `resetEntities` <a name="resetEntities" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetEntities"></a>

```typescript
public resetEntities(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowEntityType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isConstruct"></a>

```typescript
import { googleDialogflowEntityType } from '@cdktf/provider-google-beta'

googleDialogflowEntityType.GoogleDialogflowEntityType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformElement"></a>

```typescript
import { googleDialogflowEntityType } from '@cdktf/provider-google-beta'

googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformResource"></a>

```typescript
import { googleDialogflowEntityType } from '@cdktf/provider-google-beta'

googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport"></a>

```typescript
import { googleDialogflowEntityType } from '@cdktf/provider-google-beta'

googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDialogflowEntityType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowEntityType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowEntityType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowEntityType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.entities">entities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList">GoogleDialogflowEntityTypeEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference">GoogleDialogflowEntityTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.enableFuzzyExtractionInput">enableFuzzyExtractionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.entitiesInput">entitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.entities"></a>

```typescript
public readonly entities: GoogleDialogflowEntityTypeEntitiesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList">GoogleDialogflowEntityTypeEntitiesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowEntityTypeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference">GoogleDialogflowEntityTypeTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableFuzzyExtractionInput`<sup>Optional</sup> <a name="enableFuzzyExtractionInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.enableFuzzyExtractionInput"></a>

```typescript
public readonly enableFuzzyExtractionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.entitiesInput"></a>

```typescript
public readonly entitiesInput: IResolvable | GoogleDialogflowEntityTypeEntities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowEntityTypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableFuzzyExtraction`<sup>Required</sup> <a name="enableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.enableFuzzyExtraction"></a>

```typescript
public readonly enableFuzzyExtraction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowEntityTypeConfig <a name="GoogleDialogflowEntityTypeConfig" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.Initializer"></a>

```typescript
import { googleDialogflowEntityType } from '@cdktf/provider-google-beta'

const googleDialogflowEntityTypeConfig: googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.displayName">displayName</a></code> | <code>string</code> | The name of this entity type to be displayed on the console. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.kind">kind</a></code> | <code>string</code> | Indicates the kind of entity type. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.enableFuzzyExtraction">enableFuzzyExtraction</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables fuzzy entity extraction during classification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.entities">entities</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>[]</code> | entities block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#id GoogleDialogflowEntityType#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#project GoogleDialogflowEntityType#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of this entity type to be displayed on the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#display_name GoogleDialogflowEntityType#display_name}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Indicates the kind of entity type.

* KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.
* KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity
types can contain references to other entity types (with or without aliases).
* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#kind GoogleDialogflowEntityType#kind}

---

##### `enableFuzzyExtraction`<sup>Optional</sup> <a name="enableFuzzyExtraction" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.enableFuzzyExtraction"></a>

```typescript
public readonly enableFuzzyExtraction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables fuzzy entity extraction during classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#enable_fuzzy_extraction GoogleDialogflowEntityType#enable_fuzzy_extraction}

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.entities"></a>

```typescript
public readonly entities: IResolvable | GoogleDialogflowEntityTypeEntities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>[]

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#entities GoogleDialogflowEntityType#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#id GoogleDialogflowEntityType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#project GoogleDialogflowEntityType#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowEntityTypeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#timeouts GoogleDialogflowEntityType#timeouts}

---

### GoogleDialogflowEntityTypeEntities <a name="GoogleDialogflowEntityTypeEntities" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities.Initializer"></a>

```typescript
import { googleDialogflowEntityType } from '@cdktf/provider-google-beta'

const googleDialogflowEntityTypeEntities: googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities.property.synonyms">synonyms</a></code> | <code>string[]</code> | A collection of value synonyms. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities.property.value">value</a></code> | <code>string</code> | The primary value associated with this entity entry. |

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

A collection of value synonyms.

For example, if the entity type is vegetable, and value is scallions, a synonym
could be green onions.
For KIND_LIST entity types:
* This collection must contain exactly one synonym equal to value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#synonyms GoogleDialogflowEntityType#synonyms}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The primary value associated with this entity entry.

For example, if the entity type is vegetable, the value
could be scallions.
For KIND_MAP entity types:
* A reference value to be used in place of synonyms.
For KIND_LIST entity types:
* A string that can contain references to other entity types (with or without aliases).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#value GoogleDialogflowEntityType#value}

---

### GoogleDialogflowEntityTypeTimeouts <a name="GoogleDialogflowEntityTypeTimeouts" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.Initializer"></a>

```typescript
import { googleDialogflowEntityType } from '@cdktf/provider-google-beta'

const googleDialogflowEntityTypeTimeouts: googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#create GoogleDialogflowEntityType#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#delete GoogleDialogflowEntityType#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#update GoogleDialogflowEntityType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#create GoogleDialogflowEntityType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#delete GoogleDialogflowEntityType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_entity_type#update GoogleDialogflowEntityType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowEntityTypeEntitiesList <a name="GoogleDialogflowEntityTypeEntitiesList" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer"></a>

```typescript
import { googleDialogflowEntityType } from '@cdktf/provider-google-beta'

new googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.get"></a>

```typescript
public get(index: number): GoogleDialogflowEntityTypeEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowEntityTypeEntities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>[]

---


### GoogleDialogflowEntityTypeEntitiesOutputReference <a name="GoogleDialogflowEntityTypeEntitiesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer"></a>

```typescript
import { googleDialogflowEntityType } from '@cdktf/provider-google-beta'

new googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowEntityTypeEntities;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeEntities">GoogleDialogflowEntityTypeEntities</a>

---


### GoogleDialogflowEntityTypeTimeoutsOutputReference <a name="GoogleDialogflowEntityTypeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowEntityType } from '@cdktf/provider-google-beta'

new googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowEntityTypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDialogflowEntityType.GoogleDialogflowEntityTypeTimeouts">GoogleDialogflowEntityTypeTimeouts</a>

---



