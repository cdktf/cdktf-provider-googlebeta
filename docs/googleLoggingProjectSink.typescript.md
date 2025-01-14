# `googleLoggingProjectSink` Submodule <a name="`googleLoggingProjectSink` Submodule" id="@cdktf/provider-google-beta.googleLoggingProjectSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingProjectSink <a name="GoogleLoggingProjectSink" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink google_logging_project_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.Initializer"></a>

```typescript
import { googleLoggingProjectSink } from '@cdktf/provider-google-beta'

new googleLoggingProjectSink.GoogleLoggingProjectSink(scope: Construct, id: string, config: GoogleLoggingProjectSinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig">GoogleLoggingProjectSinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig">GoogleLoggingProjectSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.putBigqueryOptions">putBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.putExclusions">putExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetBigqueryOptions">resetBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetCustomWriterIdentity">resetCustomWriterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetUniqueWriterIdentity">resetUniqueWriterIdentity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryOptions` <a name="putBigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.putBigqueryOptions"></a>

```typescript
public putBigqueryOptions(value: GoogleLoggingProjectSinkBigqueryOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.putBigqueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptions">GoogleLoggingProjectSinkBigqueryOptions</a>

---

##### `putExclusions` <a name="putExclusions" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.putExclusions"></a>

```typescript
public putExclusions(value: IResolvable | GoogleLoggingProjectSinkExclusions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.putExclusions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions">GoogleLoggingProjectSinkExclusions</a>[]

---

##### `resetBigqueryOptions` <a name="resetBigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetBigqueryOptions"></a>

```typescript
public resetBigqueryOptions(): void
```

##### `resetCustomWriterIdentity` <a name="resetCustomWriterIdentity" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetCustomWriterIdentity"></a>

```typescript
public resetCustomWriterIdentity(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetExclusions"></a>

```typescript
public resetExclusions(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetUniqueWriterIdentity` <a name="resetUniqueWriterIdentity" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.resetUniqueWriterIdentity"></a>

```typescript
public resetUniqueWriterIdentity(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingProjectSink resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.isConstruct"></a>

```typescript
import { googleLoggingProjectSink } from '@cdktf/provider-google-beta'

googleLoggingProjectSink.GoogleLoggingProjectSink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.isTerraformElement"></a>

```typescript
import { googleLoggingProjectSink } from '@cdktf/provider-google-beta'

googleLoggingProjectSink.GoogleLoggingProjectSink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.isTerraformResource"></a>

```typescript
import { googleLoggingProjectSink } from '@cdktf/provider-google-beta'

googleLoggingProjectSink.GoogleLoggingProjectSink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.generateConfigForImport"></a>

```typescript
import { googleLoggingProjectSink } from '@cdktf/provider-google-beta'

googleLoggingProjectSink.GoogleLoggingProjectSink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleLoggingProjectSink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleLoggingProjectSink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleLoggingProjectSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingProjectSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.bigqueryOptions">bigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference">GoogleLoggingProjectSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.exclusions">exclusions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList">GoogleLoggingProjectSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.writerIdentity">writerIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.bigqueryOptionsInput">bigqueryOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptions">GoogleLoggingProjectSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.customWriterIdentityInput">customWriterIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.exclusionsInput">exclusionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions">GoogleLoggingProjectSinkExclusions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.uniqueWriterIdentityInput">uniqueWriterIdentityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.customWriterIdentity">customWriterIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.uniqueWriterIdentity">uniqueWriterIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bigqueryOptions`<sup>Required</sup> <a name="bigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.bigqueryOptions"></a>

```typescript
public readonly bigqueryOptions: GoogleLoggingProjectSinkBigqueryOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference">GoogleLoggingProjectSinkBigqueryOptionsOutputReference</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.exclusions"></a>

```typescript
public readonly exclusions: GoogleLoggingProjectSinkExclusionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList">GoogleLoggingProjectSinkExclusionsList</a>

---

##### `writerIdentity`<sup>Required</sup> <a name="writerIdentity" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.writerIdentity"></a>

```typescript
public readonly writerIdentity: string;
```

- *Type:* string

---

##### `bigqueryOptionsInput`<sup>Optional</sup> <a name="bigqueryOptionsInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.bigqueryOptionsInput"></a>

```typescript
public readonly bigqueryOptionsInput: GoogleLoggingProjectSinkBigqueryOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptions">GoogleLoggingProjectSinkBigqueryOptions</a>

---

##### `customWriterIdentityInput`<sup>Optional</sup> <a name="customWriterIdentityInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.customWriterIdentityInput"></a>

```typescript
public readonly customWriterIdentityInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.exclusionsInput"></a>

```typescript
public readonly exclusionsInput: IResolvable | GoogleLoggingProjectSinkExclusions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions">GoogleLoggingProjectSinkExclusions</a>[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `uniqueWriterIdentityInput`<sup>Optional</sup> <a name="uniqueWriterIdentityInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.uniqueWriterIdentityInput"></a>

```typescript
public readonly uniqueWriterIdentityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customWriterIdentity`<sup>Required</sup> <a name="customWriterIdentity" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.customWriterIdentity"></a>

```typescript
public readonly customWriterIdentity: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `uniqueWriterIdentity`<sup>Required</sup> <a name="uniqueWriterIdentity" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.uniqueWriterIdentity"></a>

```typescript
public readonly uniqueWriterIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingProjectSinkBigqueryOptions <a name="GoogleLoggingProjectSinkBigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptions.Initializer"></a>

```typescript
import { googleLoggingProjectSink } from '@cdktf/provider-google-beta'

const googleLoggingProjectSinkBigqueryOptions: googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptions.property.usePartitionedTables">usePartitionedTables</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to use BigQuery's partition tables. |

---

##### `usePartitionedTables`<sup>Required</sup> <a name="usePartitionedTables" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptions.property.usePartitionedTables"></a>

```typescript
public readonly usePartitionedTables: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#use_partitioned_tables GoogleLoggingProjectSink#use_partitioned_tables}

---

### GoogleLoggingProjectSinkConfig <a name="GoogleLoggingProjectSinkConfig" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.Initializer"></a>

```typescript
import { googleLoggingProjectSink } from '@cdktf/provider-google-beta'

const googleLoggingProjectSinkConfig: googleLoggingProjectSink.GoogleLoggingProjectSinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.destination">destination</a></code> | <code>string</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.name">name</a></code> | <code>string</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.bigqueryOptions">bigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptions">GoogleLoggingProjectSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.customWriterIdentity">customWriterIdentity</a></code> | <code>string</code> | A service account provided by the caller that will be used to write the log entries. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.description">description</a></code> | <code>string</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.exclusions">exclusions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions">GoogleLoggingProjectSinkExclusions</a>[]</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.filter">filter</a></code> | <code>string</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#id GoogleLoggingProjectSink#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.project">project</a></code> | <code>string</code> | The ID of the project to create the sink in. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.uniqueWriterIdentity">uniqueWriterIdentity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to create a unique identity associated with this sink. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#destination GoogleLoggingProjectSink#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#name GoogleLoggingProjectSink#name}

---

##### `bigqueryOptions`<sup>Optional</sup> <a name="bigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.bigqueryOptions"></a>

```typescript
public readonly bigqueryOptions: GoogleLoggingProjectSinkBigqueryOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptions">GoogleLoggingProjectSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#bigquery_options GoogleLoggingProjectSink#bigquery_options}

---

##### `customWriterIdentity`<sup>Optional</sup> <a name="customWriterIdentity" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.customWriterIdentity"></a>

```typescript
public readonly customWriterIdentity: string;
```

- *Type:* string

A service account provided by the caller that will be used to write the log entries.

The format must be serviceAccount:some@email. This field can only be specified if you are routing logs to a destination outside this sink's project. If not specified, a Logging service account will automatically be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#custom_writer_identity GoogleLoggingProjectSink#custom_writer_identity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#description GoogleLoggingProjectSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#disabled GoogleLoggingProjectSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.exclusions"></a>

```typescript
public readonly exclusions: IResolvable | GoogleLoggingProjectSinkExclusions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions">GoogleLoggingProjectSinkExclusions</a>[]

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#exclusions GoogleLoggingProjectSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#filter GoogleLoggingProjectSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#id GoogleLoggingProjectSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project to create the sink in.

If omitted, the project associated with the provider is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#project GoogleLoggingProjectSink#project}

---

##### `uniqueWriterIdentity`<sup>Optional</sup> <a name="uniqueWriterIdentity" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkConfig.property.uniqueWriterIdentity"></a>

```typescript
public readonly uniqueWriterIdentity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to create a unique identity associated with this sink.

If false (the legacy behavior), then the writer_identity used is serviceAccount:cloud-logs@system.gserviceaccount.com. If true (default), then a unique service account is created and used for this sink. If you wish to publish logs across projects, you must set unique_writer_identity to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#unique_writer_identity GoogleLoggingProjectSink#unique_writer_identity}

---

### GoogleLoggingProjectSinkExclusions <a name="GoogleLoggingProjectSinkExclusions" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions.Initializer"></a>

```typescript
import { googleLoggingProjectSink } from '@cdktf/provider-google-beta'

const googleLoggingProjectSinkExclusions: googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions.property.filter">filter</a></code> | <code>string</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions.property.name">name</a></code> | <code>string</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions.property.description">description</a></code> | <code>string</code> | A description of this exclusion. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#filter GoogleLoggingProjectSink#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#name GoogleLoggingProjectSink#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#description GoogleLoggingProjectSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_project_sink#disabled GoogleLoggingProjectSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingProjectSinkBigqueryOptionsOutputReference <a name="GoogleLoggingProjectSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.Initializer"></a>

```typescript
import { googleLoggingProjectSink } from '@cdktf/provider-google-beta'

new googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">usePartitionedTablesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.property.usePartitionedTables">usePartitionedTables</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptions">GoogleLoggingProjectSinkBigqueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usePartitionedTablesInput`<sup>Optional</sup> <a name="usePartitionedTablesInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```typescript
public readonly usePartitionedTablesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usePartitionedTables`<sup>Required</sup> <a name="usePartitionedTables" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```typescript
public readonly usePartitionedTables: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLoggingProjectSinkBigqueryOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkBigqueryOptions">GoogleLoggingProjectSinkBigqueryOptions</a>

---


### GoogleLoggingProjectSinkExclusionsList <a name="GoogleLoggingProjectSinkExclusionsList" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.Initializer"></a>

```typescript
import { googleLoggingProjectSink } from '@cdktf/provider-google-beta'

new googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.get"></a>

```typescript
public get(index: number): GoogleLoggingProjectSinkExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions">GoogleLoggingProjectSinkExclusions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingProjectSinkExclusions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions">GoogleLoggingProjectSinkExclusions</a>[]

---


### GoogleLoggingProjectSinkExclusionsOutputReference <a name="GoogleLoggingProjectSinkExclusionsOutputReference" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.Initializer"></a>

```typescript
import { googleLoggingProjectSink } from '@cdktf/provider-google-beta'

new googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions">GoogleLoggingProjectSinkExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingProjectSinkExclusions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingProjectSink.GoogleLoggingProjectSinkExclusions">GoogleLoggingProjectSinkExclusions</a>

---



