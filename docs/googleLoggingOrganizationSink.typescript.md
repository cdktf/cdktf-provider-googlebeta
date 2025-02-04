# `googleLoggingOrganizationSink` Submodule <a name="`googleLoggingOrganizationSink` Submodule" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingOrganizationSink <a name="GoogleLoggingOrganizationSink" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink google_logging_organization_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer"></a>

```typescript
import { googleLoggingOrganizationSink } from '@cdktf/provider-google-beta'

new googleLoggingOrganizationSink.GoogleLoggingOrganizationSink(scope: Construct, id: string, config: GoogleLoggingOrganizationSinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig">GoogleLoggingOrganizationSinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig">GoogleLoggingOrganizationSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putBigqueryOptions">putBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putExclusions">putExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetBigqueryOptions">resetBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetIncludeChildren">resetIncludeChildren</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetInterceptChildren">resetInterceptChildren</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryOptions` <a name="putBigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putBigqueryOptions"></a>

```typescript
public putBigqueryOptions(value: GoogleLoggingOrganizationSinkBigqueryOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putBigqueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

---

##### `putExclusions` <a name="putExclusions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putExclusions"></a>

```typescript
public putExclusions(value: IResolvable | GoogleLoggingOrganizationSinkExclusions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putExclusions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>[]

---

##### `resetBigqueryOptions` <a name="resetBigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetBigqueryOptions"></a>

```typescript
public resetBigqueryOptions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetExclusions"></a>

```typescript
public resetExclusions(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeChildren` <a name="resetIncludeChildren" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetIncludeChildren"></a>

```typescript
public resetIncludeChildren(): void
```

##### `resetInterceptChildren` <a name="resetInterceptChildren" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetInterceptChildren"></a>

```typescript
public resetInterceptChildren(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingOrganizationSink resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isConstruct"></a>

```typescript
import { googleLoggingOrganizationSink } from '@cdktf/provider-google-beta'

googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformElement"></a>

```typescript
import { googleLoggingOrganizationSink } from '@cdktf/provider-google-beta'

googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformResource"></a>

```typescript
import { googleLoggingOrganizationSink } from '@cdktf/provider-google-beta'

googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport"></a>

```typescript
import { googleLoggingOrganizationSink } from '@cdktf/provider-google-beta'

googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleLoggingOrganizationSink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleLoggingOrganizationSink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleLoggingOrganizationSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingOrganizationSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.bigqueryOptions">bigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference">GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.exclusions">exclusions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList">GoogleLoggingOrganizationSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.writerIdentity">writerIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.bigqueryOptionsInput">bigqueryOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.exclusionsInput">exclusionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.includeChildrenInput">includeChildrenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.interceptChildrenInput">interceptChildrenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.includeChildren">includeChildren</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.interceptChildren">interceptChildren</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bigqueryOptions`<sup>Required</sup> <a name="bigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.bigqueryOptions"></a>

```typescript
public readonly bigqueryOptions: GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference">GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.exclusions"></a>

```typescript
public readonly exclusions: GoogleLoggingOrganizationSinkExclusionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList">GoogleLoggingOrganizationSinkExclusionsList</a>

---

##### `writerIdentity`<sup>Required</sup> <a name="writerIdentity" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.writerIdentity"></a>

```typescript
public readonly writerIdentity: string;
```

- *Type:* string

---

##### `bigqueryOptionsInput`<sup>Optional</sup> <a name="bigqueryOptionsInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.bigqueryOptionsInput"></a>

```typescript
public readonly bigqueryOptionsInput: GoogleLoggingOrganizationSinkBigqueryOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.exclusionsInput"></a>

```typescript
public readonly exclusionsInput: IResolvable | GoogleLoggingOrganizationSinkExclusions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeChildrenInput`<sup>Optional</sup> <a name="includeChildrenInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.includeChildrenInput"></a>

```typescript
public readonly includeChildrenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `interceptChildrenInput`<sup>Optional</sup> <a name="interceptChildrenInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.interceptChildrenInput"></a>

```typescript
public readonly interceptChildrenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeChildren`<sup>Required</sup> <a name="includeChildren" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.includeChildren"></a>

```typescript
public readonly includeChildren: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `interceptChildren`<sup>Required</sup> <a name="interceptChildren" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.interceptChildren"></a>

```typescript
public readonly interceptChildren: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingOrganizationSinkBigqueryOptions <a name="GoogleLoggingOrganizationSinkBigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions.Initializer"></a>

```typescript
import { googleLoggingOrganizationSink } from '@cdktf/provider-google-beta'

const googleLoggingOrganizationSinkBigqueryOptions: googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions.property.usePartitionedTables">usePartitionedTables</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to use BigQuery's partition tables. |

---

##### `usePartitionedTables`<sup>Required</sup> <a name="usePartitionedTables" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions.property.usePartitionedTables"></a>

```typescript
public readonly usePartitionedTables: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#use_partitioned_tables GoogleLoggingOrganizationSink#use_partitioned_tables}

---

### GoogleLoggingOrganizationSinkConfig <a name="GoogleLoggingOrganizationSinkConfig" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.Initializer"></a>

```typescript
import { googleLoggingOrganizationSink } from '@cdktf/provider-google-beta'

const googleLoggingOrganizationSinkConfig: googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.destination">destination</a></code> | <code>string</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.name">name</a></code> | <code>string</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.orgId">orgId</a></code> | <code>string</code> | The numeric ID of the organization to be exported to the sink. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.bigqueryOptions">bigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.description">description</a></code> | <code>string</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.exclusions">exclusions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>[]</code> | exclusions block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.filter">filter</a></code> | <code>string</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#id GoogleLoggingOrganizationSink#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.includeChildren">includeChildren</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to include children organizations in the sink export. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.interceptChildren">interceptChildren</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to intercept logs from child projects. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#destination GoogleLoggingOrganizationSink#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#name GoogleLoggingOrganizationSink#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The numeric ID of the organization to be exported to the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#org_id GoogleLoggingOrganizationSink#org_id}

---

##### `bigqueryOptions`<sup>Optional</sup> <a name="bigqueryOptions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.bigqueryOptions"></a>

```typescript
public readonly bigqueryOptions: GoogleLoggingOrganizationSinkBigqueryOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#bigquery_options GoogleLoggingOrganizationSink#bigquery_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#description GoogleLoggingOrganizationSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#disabled GoogleLoggingOrganizationSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.exclusions"></a>

```typescript
public readonly exclusions: IResolvable | GoogleLoggingOrganizationSinkExclusions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>[]

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#exclusions GoogleLoggingOrganizationSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#filter GoogleLoggingOrganizationSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#id GoogleLoggingOrganizationSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeChildren`<sup>Optional</sup> <a name="includeChildren" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.includeChildren"></a>

```typescript
public readonly includeChildren: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to include children organizations in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided organization are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#include_children GoogleLoggingOrganizationSink#include_children}

---

##### `interceptChildren`<sup>Optional</sup> <a name="interceptChildren" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.interceptChildren"></a>

```typescript
public readonly interceptChildren: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to intercept logs from child projects.

If true, matching logs will not match with sinks in child resources, except _Required sinks. This sink will be visible to child resources when listing sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#intercept_children GoogleLoggingOrganizationSink#intercept_children}

---

### GoogleLoggingOrganizationSinkExclusions <a name="GoogleLoggingOrganizationSinkExclusions" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.Initializer"></a>

```typescript
import { googleLoggingOrganizationSink } from '@cdktf/provider-google-beta'

const googleLoggingOrganizationSinkExclusions: googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.filter">filter</a></code> | <code>string</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.name">name</a></code> | <code>string</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.description">description</a></code> | <code>string</code> | A description of this exclusion. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#filter GoogleLoggingOrganizationSink#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#name GoogleLoggingOrganizationSink#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#description GoogleLoggingOrganizationSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_logging_organization_sink#disabled GoogleLoggingOrganizationSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference <a name="GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer"></a>

```typescript
import { googleLoggingOrganizationSink } from '@cdktf/provider-google-beta'

new googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">usePartitionedTablesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTables">usePartitionedTables</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usePartitionedTablesInput`<sup>Optional</sup> <a name="usePartitionedTablesInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```typescript
public readonly usePartitionedTablesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usePartitionedTables`<sup>Required</sup> <a name="usePartitionedTables" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```typescript
public readonly usePartitionedTables: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLoggingOrganizationSinkBigqueryOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

---


### GoogleLoggingOrganizationSinkExclusionsList <a name="GoogleLoggingOrganizationSinkExclusionsList" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer"></a>

```typescript
import { googleLoggingOrganizationSink } from '@cdktf/provider-google-beta'

new googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.get"></a>

```typescript
public get(index: number): GoogleLoggingOrganizationSinkExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingOrganizationSinkExclusions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>[]

---


### GoogleLoggingOrganizationSinkExclusionsOutputReference <a name="GoogleLoggingOrganizationSinkExclusionsOutputReference" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer"></a>

```typescript
import { googleLoggingOrganizationSink } from '@cdktf/provider-google-beta'

new googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingOrganizationSinkExclusions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>

---



