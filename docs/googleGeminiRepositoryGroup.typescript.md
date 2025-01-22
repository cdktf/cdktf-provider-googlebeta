# `googleGeminiRepositoryGroup` Submodule <a name="`googleGeminiRepositoryGroup` Submodule" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiRepositoryGroup <a name="GoogleGeminiRepositoryGroup" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group google_gemini_repository_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer"></a>

```typescript
import { googleGeminiRepositoryGroup } from '@cdktf/provider-google-beta'

new googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup(scope: Construct, id: string, config: GoogleGeminiRepositoryGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig">GoogleGeminiRepositoryGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig">GoogleGeminiRepositoryGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.putRepositories">putRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRepositories` <a name="putRepositories" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.putRepositories"></a>

```typescript
public putRepositories(value: IResolvable | GoogleGeminiRepositoryGroupRepositories[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.putRepositories.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories">GoogleGeminiRepositoryGroupRepositories</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGeminiRepositoryGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts">GoogleGeminiRepositoryGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiRepositoryGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isConstruct"></a>

```typescript
import { googleGeminiRepositoryGroup } from '@cdktf/provider-google-beta'

googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformElement"></a>

```typescript
import { googleGeminiRepositoryGroup } from '@cdktf/provider-google-beta'

googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformResource"></a>

```typescript
import { googleGeminiRepositoryGroup } from '@cdktf/provider-google-beta'

googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport"></a>

```typescript
import { googleGeminiRepositoryGroup } from '@cdktf/provider-google-beta'

googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleGeminiRepositoryGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGeminiRepositoryGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGeminiRepositoryGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiRepositoryGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositories">repositories</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList">GoogleGeminiRepositoryGroupRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference">GoogleGeminiRepositoryGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.codeRepositoryIndexInput">codeRepositoryIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositoriesInput">repositoriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories">GoogleGeminiRepositoryGroupRepositories</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositoryGroupIdInput">repositoryGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts">GoogleGeminiRepositoryGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.codeRepositoryIndex">codeRepositoryIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositoryGroupId">repositoryGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositories"></a>

```typescript
public readonly repositories: GoogleGeminiRepositoryGroupRepositoriesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList">GoogleGeminiRepositoryGroupRepositoriesList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGeminiRepositoryGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference">GoogleGeminiRepositoryGroupTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `codeRepositoryIndexInput`<sup>Optional</sup> <a name="codeRepositoryIndexInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.codeRepositoryIndexInput"></a>

```typescript
public readonly codeRepositoryIndexInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoriesInput`<sup>Optional</sup> <a name="repositoriesInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositoriesInput"></a>

```typescript
public readonly repositoriesInput: IResolvable | GoogleGeminiRepositoryGroupRepositories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories">GoogleGeminiRepositoryGroupRepositories</a>[]

---

##### `repositoryGroupIdInput`<sup>Optional</sup> <a name="repositoryGroupIdInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositoryGroupIdInput"></a>

```typescript
public readonly repositoryGroupIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGeminiRepositoryGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts">GoogleGeminiRepositoryGroupTimeouts</a>

---

##### `codeRepositoryIndex`<sup>Required</sup> <a name="codeRepositoryIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.codeRepositoryIndex"></a>

```typescript
public readonly codeRepositoryIndex: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryGroupId`<sup>Required</sup> <a name="repositoryGroupId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.repositoryGroupId"></a>

```typescript
public readonly repositoryGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiRepositoryGroupConfig <a name="GoogleGeminiRepositoryGroupConfig" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.Initializer"></a>

```typescript
import { googleGeminiRepositoryGroup } from '@cdktf/provider-google-beta'

const googleGeminiRepositoryGroupConfig: googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.codeRepositoryIndex">codeRepositoryIndex</a></code> | <code>string</code> | Required. Id of the Code Repository Index. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.location">location</a></code> | <code>string</code> | The location of the Code Repository Index, for example 'us-central1'. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.repositories">repositories</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories">GoogleGeminiRepositoryGroupRepositories</a>[]</code> | repositories block. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.repositoryGroupId">repositoryGroupId</a></code> | <code>string</code> | Required. Id of the Repository Group. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#id GoogleGeminiRepositoryGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#project GoogleGeminiRepositoryGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts">GoogleGeminiRepositoryGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `codeRepositoryIndex`<sup>Required</sup> <a name="codeRepositoryIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.codeRepositoryIndex"></a>

```typescript
public readonly codeRepositoryIndex: string;
```

- *Type:* string

Required. Id of the Code Repository Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#code_repository_index GoogleGeminiRepositoryGroup#code_repository_index}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Code Repository Index, for example 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#location GoogleGeminiRepositoryGroup#location}

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.repositories"></a>

```typescript
public readonly repositories: IResolvable | GoogleGeminiRepositoryGroupRepositories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories">GoogleGeminiRepositoryGroupRepositories</a>[]

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#repositories GoogleGeminiRepositoryGroup#repositories}

---

##### `repositoryGroupId`<sup>Required</sup> <a name="repositoryGroupId" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.repositoryGroupId"></a>

```typescript
public readonly repositoryGroupId: string;
```

- *Type:* string

Required. Id of the Repository Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#repository_group_id GoogleGeminiRepositoryGroup#repository_group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#id GoogleGeminiRepositoryGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#labels GoogleGeminiRepositoryGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#project GoogleGeminiRepositoryGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGeminiRepositoryGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts">GoogleGeminiRepositoryGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#timeouts GoogleGeminiRepositoryGroup#timeouts}

---

### GoogleGeminiRepositoryGroupRepositories <a name="GoogleGeminiRepositoryGroupRepositories" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories.Initializer"></a>

```typescript
import { googleGeminiRepositoryGroup } from '@cdktf/provider-google-beta'

const googleGeminiRepositoryGroupRepositories: googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories.property.branchPattern">branchPattern</a></code> | <code>string</code> | Required. The Git branch pattern used for indexing in RE2 syntax. See https://github.com/google/re2/wiki/syntax for syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories.property.resource">resource</a></code> | <code>string</code> | Required. The DeveloperConnect repository full resource name, relative resource name or resource URL to be indexed. |

---

##### `branchPattern`<sup>Required</sup> <a name="branchPattern" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories.property.branchPattern"></a>

```typescript
public readonly branchPattern: string;
```

- *Type:* string

Required. The Git branch pattern used for indexing in RE2 syntax. See https://github.com/google/re2/wiki/syntax for syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#branch_pattern GoogleGeminiRepositoryGroup#branch_pattern}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Required. The DeveloperConnect repository full resource name, relative resource name or resource URL to be indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#resource GoogleGeminiRepositoryGroup#resource}

---

### GoogleGeminiRepositoryGroupTimeouts <a name="GoogleGeminiRepositoryGroupTimeouts" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.Initializer"></a>

```typescript
import { googleGeminiRepositoryGroup } from '@cdktf/provider-google-beta'

const googleGeminiRepositoryGroupTimeouts: googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#create GoogleGeminiRepositoryGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#delete GoogleGeminiRepositoryGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#update GoogleGeminiRepositoryGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#create GoogleGeminiRepositoryGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#delete GoogleGeminiRepositoryGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_gemini_repository_group#update GoogleGeminiRepositoryGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiRepositoryGroupRepositoriesList <a name="GoogleGeminiRepositoryGroupRepositoriesList" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer"></a>

```typescript
import { googleGeminiRepositoryGroup } from '@cdktf/provider-google-beta'

new googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.get"></a>

```typescript
public get(index: number): GoogleGeminiRepositoryGroupRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories">GoogleGeminiRepositoryGroupRepositories</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGeminiRepositoryGroupRepositories[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories">GoogleGeminiRepositoryGroupRepositories</a>[]

---


### GoogleGeminiRepositoryGroupRepositoriesOutputReference <a name="GoogleGeminiRepositoryGroupRepositoriesOutputReference" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer"></a>

```typescript
import { googleGeminiRepositoryGroup } from '@cdktf/provider-google-beta'

new googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.branchPatternInput">branchPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.branchPattern">branchPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories">GoogleGeminiRepositoryGroupRepositories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchPatternInput`<sup>Optional</sup> <a name="branchPatternInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.branchPatternInput"></a>

```typescript
public readonly branchPatternInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `branchPattern`<sup>Required</sup> <a name="branchPattern" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.branchPattern"></a>

```typescript
public readonly branchPattern: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGeminiRepositoryGroupRepositories;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupRepositories">GoogleGeminiRepositoryGroupRepositories</a>

---


### GoogleGeminiRepositoryGroupTimeoutsOutputReference <a name="GoogleGeminiRepositoryGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGeminiRepositoryGroup } from '@cdktf/provider-google-beta'

new googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts">GoogleGeminiRepositoryGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGeminiRepositoryGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGeminiRepositoryGroup.GoogleGeminiRepositoryGroupTimeouts">GoogleGeminiRepositoryGroupTimeouts</a>

---



