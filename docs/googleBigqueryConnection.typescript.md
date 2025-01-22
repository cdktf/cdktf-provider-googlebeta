# `googleBigqueryConnection` Submodule <a name="`googleBigqueryConnection` Submodule" id="@cdktf/provider-google-beta.googleBigqueryConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryConnection <a name="GoogleBigqueryConnection" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection google_bigquery_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnection(scope: Construct, id: string, config?: GoogleBigqueryConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig">GoogleBigqueryConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig">GoogleBigqueryConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudResource">putCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner">putCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql">putCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark">putSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudResource">resetCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSpanner">resetCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSql">resetCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetSpark">resetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAws"></a>

```typescript
public putAws(value: GoogleBigqueryConnectionAws): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

---

##### `putAzure` <a name="putAzure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure"></a>

```typescript
public putAzure(value: GoogleBigqueryConnectionAzure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

---

##### `putCloudResource` <a name="putCloudResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudResource"></a>

```typescript
public putCloudResource(value: GoogleBigqueryConnectionCloudResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

---

##### `putCloudSpanner` <a name="putCloudSpanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner"></a>

```typescript
public putCloudSpanner(value: GoogleBigqueryConnectionCloudSpanner): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

---

##### `putCloudSql` <a name="putCloudSql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql"></a>

```typescript
public putCloudSql(value: GoogleBigqueryConnectionCloudSql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

---

##### `putSpark` <a name="putSpark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark"></a>

```typescript
public putSpark(value: GoogleBigqueryConnectionSpark): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigqueryConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

---

##### `resetAws` <a name="resetAws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAws"></a>

```typescript
public resetAws(): void
```

##### `resetAzure` <a name="resetAzure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAzure"></a>

```typescript
public resetAzure(): void
```

##### `resetCloudResource` <a name="resetCloudResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudResource"></a>

```typescript
public resetCloudResource(): void
```

##### `resetCloudSpanner` <a name="resetCloudSpanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSpanner"></a>

```typescript
public resetCloudSpanner(): void
```

##### `resetCloudSql` <a name="resetCloudSql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSql"></a>

```typescript
public resetCloudSql(): void
```

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetConnectionId"></a>

```typescript
public resetConnectionId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetFriendlyName"></a>

```typescript
public resetFriendlyName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSpark` <a name="resetSpark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetSpark"></a>

```typescript
public resetSpark(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isConstruct"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

googleBigqueryConnection.GoogleBigqueryConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBigqueryConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference">GoogleBigqueryConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference">GoogleBigqueryConnectionAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResource">cloudResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference">GoogleBigqueryConnectionCloudResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpanner">cloudSpanner</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference">GoogleBigqueryConnectionCloudSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSql">cloudSql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference">GoogleBigqueryConnectionCloudSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.hasCredential">hasCredential</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference">GoogleBigqueryConnectionSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference">GoogleBigqueryConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.awsInput">awsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azureInput">azureInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResourceInput">cloudResourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpannerInput">cloudSpannerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSqlInput">cloudSqlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyNameInput">friendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.sparkInput">sparkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.aws"></a>

```typescript
public readonly aws: GoogleBigqueryConnectionAwsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference">GoogleBigqueryConnectionAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azure"></a>

```typescript
public readonly azure: GoogleBigqueryConnectionAzureOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference">GoogleBigqueryConnectionAzureOutputReference</a>

---

##### `cloudResource`<sup>Required</sup> <a name="cloudResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResource"></a>

```typescript
public readonly cloudResource: GoogleBigqueryConnectionCloudResourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference">GoogleBigqueryConnectionCloudResourceOutputReference</a>

---

##### `cloudSpanner`<sup>Required</sup> <a name="cloudSpanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpanner"></a>

```typescript
public readonly cloudSpanner: GoogleBigqueryConnectionCloudSpannerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference">GoogleBigqueryConnectionCloudSpannerOutputReference</a>

---

##### `cloudSql`<sup>Required</sup> <a name="cloudSql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSql"></a>

```typescript
public readonly cloudSql: GoogleBigqueryConnectionCloudSqlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference">GoogleBigqueryConnectionCloudSqlOutputReference</a>

---

##### `hasCredential`<sup>Required</sup> <a name="hasCredential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.hasCredential"></a>

```typescript
public readonly hasCredential: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.spark"></a>

```typescript
public readonly spark: GoogleBigqueryConnectionSparkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference">GoogleBigqueryConnectionSparkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference">GoogleBigqueryConnectionTimeoutsOutputReference</a>

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.awsInput"></a>

```typescript
public readonly awsInput: GoogleBigqueryConnectionAws;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azureInput"></a>

```typescript
public readonly azureInput: GoogleBigqueryConnectionAzure;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

---

##### `cloudResourceInput`<sup>Optional</sup> <a name="cloudResourceInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResourceInput"></a>

```typescript
public readonly cloudResourceInput: GoogleBigqueryConnectionCloudResource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

---

##### `cloudSpannerInput`<sup>Optional</sup> <a name="cloudSpannerInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpannerInput"></a>

```typescript
public readonly cloudSpannerInput: GoogleBigqueryConnectionCloudSpanner;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

---

##### `cloudSqlInput`<sup>Optional</sup> <a name="cloudSqlInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSqlInput"></a>

```typescript
public readonly cloudSqlInput: GoogleBigqueryConnectionCloudSql;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyNameInput"></a>

```typescript
public readonly friendlyNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sparkInput`<sup>Optional</sup> <a name="sparkInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.sparkInput"></a>

```typescript
public readonly sparkInput: GoogleBigqueryConnectionSpark;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigqueryConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryConnectionAws <a name="GoogleBigqueryConnectionAws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

const googleBigqueryConnectionAws: googleBigqueryConnection.GoogleBigqueryConnectionAws = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws.property.accessRole">accessRole</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a></code> | access_role block. |

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws.property.accessRole"></a>

```typescript
public readonly accessRole: GoogleBigqueryConnectionAwsAccessRole;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

access_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#access_role GoogleBigqueryConnection#access_role}

---

### GoogleBigqueryConnectionAwsAccessRole <a name="GoogleBigqueryConnectionAwsAccessRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

const googleBigqueryConnectionAwsAccessRole: googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole.property.iamRoleId">iamRoleId</a></code> | <code>string</code> | The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection. |

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole.property.iamRoleId"></a>

```typescript
public readonly iamRoleId: string;
```

- *Type:* string

The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#iam_role_id GoogleBigqueryConnection#iam_role_id}

---

### GoogleBigqueryConnectionAzure <a name="GoogleBigqueryConnectionAzure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

const googleBigqueryConnectionAzure: googleBigqueryConnection.GoogleBigqueryConnectionAzure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.customerTenantId">customerTenantId</a></code> | <code>string</code> | The id of customer's directory that host the data. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.federatedApplicationClientId">federatedApplicationClientId</a></code> | <code>string</code> | The Azure Application (client) ID where the federated credentials will be hosted. |

---

##### `customerTenantId`<sup>Required</sup> <a name="customerTenantId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.customerTenantId"></a>

```typescript
public readonly customerTenantId: string;
```

- *Type:* string

The id of customer's directory that host the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#customer_tenant_id GoogleBigqueryConnection#customer_tenant_id}

---

##### `federatedApplicationClientId`<sup>Optional</sup> <a name="federatedApplicationClientId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.federatedApplicationClientId"></a>

```typescript
public readonly federatedApplicationClientId: string;
```

- *Type:* string

The Azure Application (client) ID where the federated credentials will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#federated_application_client_id GoogleBigqueryConnection#federated_application_client_id}

---

### GoogleBigqueryConnectionCloudResource <a name="GoogleBigqueryConnectionCloudResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

const googleBigqueryConnectionCloudResource: googleBigqueryConnection.GoogleBigqueryConnectionCloudResource = { ... }
```


### GoogleBigqueryConnectionCloudSpanner <a name="GoogleBigqueryConnectionCloudSpanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

const googleBigqueryConnectionCloudSpanner: googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.database">database</a></code> | <code>string</code> | Cloud Spanner database in the form 'project/instance/database'. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.databaseRole">databaseRole</a></code> | <code>string</code> | Cloud Spanner database role for fine-grained access control. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.maxParallelism">maxParallelism</a></code> | <code>number</code> | Allows setting max parallelism per query when executing on Spanner independent compute resources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useDataBoost">useDataBoost</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, the request will be executed via Spanner independent compute resources. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useParallelism">useParallelism</a></code> | <code>boolean \| cdktf.IResolvable</code> | If parallelism should be used when reading from Cloud Spanner. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useServerlessAnalytics">useServerlessAnalytics</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the serverless analytics service should be used to read data from Cloud Spanner. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Cloud Spanner database in the form 'project/instance/database'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}

---

##### `databaseRole`<sup>Optional</sup> <a name="databaseRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

Cloud Spanner database role for fine-grained access control.

The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as 'SELECT' and 'INSERT'. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#database_role GoogleBigqueryConnection#database_role}

---

##### `maxParallelism`<sup>Optional</sup> <a name="maxParallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.maxParallelism"></a>

```typescript
public readonly maxParallelism: number;
```

- *Type:* number

Allows setting max parallelism per query when executing on Spanner independent compute resources.

If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. 'useParallelism' and 'useDataBoost' must be set when setting max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#max_parallelism GoogleBigqueryConnection#max_parallelism}

---

##### `useDataBoost`<sup>Optional</sup> <a name="useDataBoost" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useDataBoost"></a>

```typescript
public readonly useDataBoost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, the request will be executed via Spanner independent compute resources.

'use_parallelism' must be set when using data boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#use_data_boost GoogleBigqueryConnection#use_data_boost}

---

##### `useParallelism`<sup>Optional</sup> <a name="useParallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useParallelism"></a>

```typescript
public readonly useParallelism: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If parallelism should be used when reading from Cloud Spanner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#use_parallelism GoogleBigqueryConnection#use_parallelism}

---

##### `useServerlessAnalytics`<sup>Optional</sup> <a name="useServerlessAnalytics" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useServerlessAnalytics"></a>

```typescript
public readonly useServerlessAnalytics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the serverless analytics service should be used to read data from Cloud Spanner.

'useParallelism' must be set when using serverless analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#use_serverless_analytics GoogleBigqueryConnection#use_serverless_analytics}

---

### GoogleBigqueryConnectionCloudSql <a name="GoogleBigqueryConnectionCloudSql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

const googleBigqueryConnectionCloudSql: googleBigqueryConnection.GoogleBigqueryConnectionCloudSql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a></code> | credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.database">database</a></code> | <code>string</code> | Database name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.instanceId">instanceId</a></code> | <code>string</code> | Cloud SQL instance ID in the form project:location:instance. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.type">type</a></code> | <code>string</code> | Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"]. |

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.credential"></a>

```typescript
public readonly credential: GoogleBigqueryConnectionCloudSqlCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#credential GoogleBigqueryConnection#credential}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Cloud SQL instance ID in the form project:location:instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#instance_id GoogleBigqueryConnection#instance_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#type GoogleBigqueryConnection#type}

---

### GoogleBigqueryConnectionCloudSqlCredential <a name="GoogleBigqueryConnectionCloudSqlCredential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

const googleBigqueryConnectionCloudSqlCredential: googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.password">password</a></code> | <code>string</code> | Password for database. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.username">username</a></code> | <code>string</code> | Username for database. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#password GoogleBigqueryConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#username GoogleBigqueryConnection#username}

---

### GoogleBigqueryConnectionConfig <a name="GoogleBigqueryConnectionConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

const googleBigqueryConnectionConfig: googleBigqueryConnection.GoogleBigqueryConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudResource">cloudResource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSpanner">cloudSpanner</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSql">cloudSql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.description">description</a></code> | <code>string</code> | A descriptive description for the connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.friendlyName">friendlyName</a></code> | <code>string</code> | A descriptive name for the connection. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Optional. The Cloud KMS key that is used for encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.aws"></a>

```typescript
public readonly aws: GoogleBigqueryConnectionAws;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#aws GoogleBigqueryConnection#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.azure"></a>

```typescript
public readonly azure: GoogleBigqueryConnectionAzure;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#azure GoogleBigqueryConnection#azure}

---

##### `cloudResource`<sup>Optional</sup> <a name="cloudResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudResource"></a>

```typescript
public readonly cloudResource: GoogleBigqueryConnectionCloudResource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#cloud_resource GoogleBigqueryConnection#cloud_resource}

---

##### `cloudSpanner`<sup>Optional</sup> <a name="cloudSpanner" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSpanner"></a>

```typescript
public readonly cloudSpanner: GoogleBigqueryConnectionCloudSpanner;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#cloud_spanner GoogleBigqueryConnection#cloud_spanner}

---

##### `cloudSql`<sup>Optional</sup> <a name="cloudSql" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSql"></a>

```typescript
public readonly cloudSql: GoogleBigqueryConnectionCloudSql;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#cloud_sql GoogleBigqueryConnection#cloud_sql}

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#connection_id GoogleBigqueryConnection#connection_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#description GoogleBigqueryConnection#description}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#friendly_name GoogleBigqueryConnection#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Optional. The Cloud KMS key that is used for encryption.

Example: projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#kms_key_name GoogleBigqueryConnection#kms_key_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#location GoogleBigqueryConnection#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.spark"></a>

```typescript
public readonly spark: GoogleBigqueryConnectionSpark;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#spark GoogleBigqueryConnection#spark}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#timeouts GoogleBigqueryConnection#timeouts}

---

### GoogleBigqueryConnectionSpark <a name="GoogleBigqueryConnectionSpark" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

const googleBigqueryConnectionSpark: googleBigqueryConnection.GoogleBigqueryConnectionSpark = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.metastoreServiceConfig">metastoreServiceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a></code> | metastore_service_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastoreServiceConfig`<sup>Optional</sup> <a name="metastoreServiceConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.metastoreServiceConfig"></a>

```typescript
public readonly metastoreServiceConfig: GoogleBigqueryConnectionSparkMetastoreServiceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

metastore_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#metastore_service_config GoogleBigqueryConnection#metastore_service_config}

---

##### `sparkHistoryServerConfig`<sup>Optional</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.sparkHistoryServerConfig"></a>

```typescript
public readonly sparkHistoryServerConfig: GoogleBigqueryConnectionSparkSparkHistoryServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#spark_history_server_config GoogleBigqueryConnection#spark_history_server_config}

---

### GoogleBigqueryConnectionSparkMetastoreServiceConfig <a name="GoogleBigqueryConnectionSparkMetastoreServiceConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

const googleBigqueryConnectionSparkMetastoreServiceConfig: googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService">metastoreService</a></code> | <code>string</code> | Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId]. |

---

##### `metastoreService`<sup>Optional</sup> <a name="metastoreService" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService"></a>

```typescript
public readonly metastoreService: string;
```

- *Type:* string

Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#metastore_service GoogleBigqueryConnection#metastore_service}

---

### GoogleBigqueryConnectionSparkSparkHistoryServerConfig <a name="GoogleBigqueryConnectionSparkSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

const googleBigqueryConnectionSparkSparkHistoryServerConfig: googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster">dataprocCluster</a></code> | <code>string</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name]. |

---

##### `dataprocCluster`<sup>Optional</sup> <a name="dataprocCluster" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster"></a>

```typescript
public readonly dataprocCluster: string;
```

- *Type:* string

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#dataproc_cluster GoogleBigqueryConnection#dataproc_cluster}

---

### GoogleBigqueryConnectionTimeouts <a name="GoogleBigqueryConnectionTimeouts" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

const googleBigqueryConnectionTimeouts: googleBigqueryConnection.GoogleBigqueryConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#create GoogleBigqueryConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#delete GoogleBigqueryConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#update GoogleBigqueryConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#create GoogleBigqueryConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#delete GoogleBigqueryConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_bigquery_connection#update GoogleBigqueryConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryConnectionAwsAccessRoleOutputReference <a name="GoogleBigqueryConnectionAwsAccessRoleOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput">iamRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId">iamRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `iamRoleIdInput`<sup>Optional</sup> <a name="iamRoleIdInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput"></a>

```typescript
public readonly iamRoleIdInput: string;
```

- *Type:* string

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId"></a>

```typescript
public readonly iamRoleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionAwsAccessRole;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

---


### GoogleBigqueryConnectionAwsOutputReference <a name="GoogleBigqueryConnectionAwsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.putAccessRole">putAccessRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessRole` <a name="putAccessRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.putAccessRole"></a>

```typescript
public putAccessRole(value: GoogleBigqueryConnectionAwsAccessRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.putAccessRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRole">accessRole</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference">GoogleBigqueryConnectionAwsAccessRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRoleInput">accessRoleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRole"></a>

```typescript
public readonly accessRole: GoogleBigqueryConnectionAwsAccessRoleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference">GoogleBigqueryConnectionAwsAccessRoleOutputReference</a>

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRoleInput"></a>

```typescript
public readonly accessRoleInput: GoogleBigqueryConnectionAwsAccessRole;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionAws;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

---


### GoogleBigqueryConnectionAzureOutputReference <a name="GoogleBigqueryConnectionAzureOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId">resetFederatedApplicationClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFederatedApplicationClientId` <a name="resetFederatedApplicationClientId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId"></a>

```typescript
public resetFederatedApplicationClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.redirectUri">redirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantIdInput">customerTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput">federatedApplicationClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantId">customerTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientId">federatedApplicationClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

---

##### `customerTenantIdInput`<sup>Optional</sup> <a name="customerTenantIdInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantIdInput"></a>

```typescript
public readonly customerTenantIdInput: string;
```

- *Type:* string

---

##### `federatedApplicationClientIdInput`<sup>Optional</sup> <a name="federatedApplicationClientIdInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput"></a>

```typescript
public readonly federatedApplicationClientIdInput: string;
```

- *Type:* string

---

##### `customerTenantId`<sup>Required</sup> <a name="customerTenantId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantId"></a>

```typescript
public readonly customerTenantId: string;
```

- *Type:* string

---

##### `federatedApplicationClientId`<sup>Required</sup> <a name="federatedApplicationClientId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientId"></a>

```typescript
public readonly federatedApplicationClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionAzure;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

---


### GoogleBigqueryConnectionCloudResourceOutputReference <a name="GoogleBigqueryConnectionCloudResourceOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionCloudResource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

---


### GoogleBigqueryConnectionCloudSpannerOutputReference <a name="GoogleBigqueryConnectionCloudSpannerOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole">resetDatabaseRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism">resetMaxParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost">resetUseDataBoost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseParallelism">resetUseParallelism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics">resetUseServerlessAnalytics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseRole` <a name="resetDatabaseRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole"></a>

```typescript
public resetDatabaseRole(): void
```

##### `resetMaxParallelism` <a name="resetMaxParallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism"></a>

```typescript
public resetMaxParallelism(): void
```

##### `resetUseDataBoost` <a name="resetUseDataBoost" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost"></a>

```typescript
public resetUseDataBoost(): void
```

##### `resetUseParallelism` <a name="resetUseParallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseParallelism"></a>

```typescript
public resetUseParallelism(): void
```

##### `resetUseServerlessAnalytics` <a name="resetUseServerlessAnalytics" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics"></a>

```typescript
public resetUseServerlessAnalytics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput">databaseRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput">maxParallelismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput">useDataBoostInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput">useParallelismInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput">useServerlessAnalyticsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRole">databaseRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelism">maxParallelism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoost">useDataBoost</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelism">useParallelism</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics">useServerlessAnalytics</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `databaseRoleInput`<sup>Optional</sup> <a name="databaseRoleInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput"></a>

```typescript
public readonly databaseRoleInput: string;
```

- *Type:* string

---

##### `maxParallelismInput`<sup>Optional</sup> <a name="maxParallelismInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput"></a>

```typescript
public readonly maxParallelismInput: number;
```

- *Type:* number

---

##### `useDataBoostInput`<sup>Optional</sup> <a name="useDataBoostInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput"></a>

```typescript
public readonly useDataBoostInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useParallelismInput`<sup>Optional</sup> <a name="useParallelismInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput"></a>

```typescript
public readonly useParallelismInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useServerlessAnalyticsInput`<sup>Optional</sup> <a name="useServerlessAnalyticsInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput"></a>

```typescript
public readonly useServerlessAnalyticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `databaseRole`<sup>Required</sup> <a name="databaseRole" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

---

##### `maxParallelism`<sup>Required</sup> <a name="maxParallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelism"></a>

```typescript
public readonly maxParallelism: number;
```

- *Type:* number

---

##### `useDataBoost`<sup>Required</sup> <a name="useDataBoost" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoost"></a>

```typescript
public readonly useDataBoost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useParallelism`<sup>Required</sup> <a name="useParallelism" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelism"></a>

```typescript
public readonly useParallelism: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useServerlessAnalytics`<sup>Required</sup> <a name="useServerlessAnalytics" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics"></a>

```typescript
public readonly useServerlessAnalytics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionCloudSpanner;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

---


### GoogleBigqueryConnectionCloudSqlCredentialOutputReference <a name="GoogleBigqueryConnectionCloudSqlCredentialOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionCloudSqlCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

---


### GoogleBigqueryConnectionCloudSqlOutputReference <a name="GoogleBigqueryConnectionCloudSqlOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential">putCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredential` <a name="putCredential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential"></a>

```typescript
public putCredential(value: GoogleBigqueryConnectionCloudSqlCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference">GoogleBigqueryConnectionCloudSqlCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credentialInput">credentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credential"></a>

```typescript
public readonly credential: GoogleBigqueryConnectionCloudSqlCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference">GoogleBigqueryConnectionCloudSqlCredentialOutputReference</a>

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credentialInput"></a>

```typescript
public readonly credentialInput: GoogleBigqueryConnectionCloudSqlCredential;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionCloudSql;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

---


### GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference <a name="GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService">resetMetastoreService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetastoreService` <a name="resetMetastoreService" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService"></a>

```typescript
public resetMetastoreService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput">metastoreServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService">metastoreService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metastoreServiceInput`<sup>Optional</sup> <a name="metastoreServiceInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput"></a>

```typescript
public readonly metastoreServiceInput: string;
```

- *Type:* string

---

##### `metastoreService`<sup>Required</sup> <a name="metastoreService" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService"></a>

```typescript
public readonly metastoreService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionSparkMetastoreServiceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

---


### GoogleBigqueryConnectionSparkOutputReference <a name="GoogleBigqueryConnectionSparkOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putMetastoreServiceConfig">putMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig">putSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig">resetMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig">resetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetastoreServiceConfig` <a name="putMetastoreServiceConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putMetastoreServiceConfig"></a>

```typescript
public putMetastoreServiceConfig(value: GoogleBigqueryConnectionSparkMetastoreServiceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putMetastoreServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

---

##### `putSparkHistoryServerConfig` <a name="putSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig"></a>

```typescript
public putSparkHistoryServerConfig(value: GoogleBigqueryConnectionSparkSparkHistoryServerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

---

##### `resetMetastoreServiceConfig` <a name="resetMetastoreServiceConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig"></a>

```typescript
public resetMetastoreServiceConfig(): void
```

##### `resetSparkHistoryServerConfig` <a name="resetSparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig"></a>

```typescript
public resetSparkHistoryServerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfig">metastoreServiceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference">GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference">GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput">metastoreServiceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput">sparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metastoreServiceConfig`<sup>Required</sup> <a name="metastoreServiceConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfig"></a>

```typescript
public readonly metastoreServiceConfig: GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference">GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference</a>

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `sparkHistoryServerConfig`<sup>Required</sup> <a name="sparkHistoryServerConfig" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig"></a>

```typescript
public readonly sparkHistoryServerConfig: GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference">GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a>

---

##### `metastoreServiceConfigInput`<sup>Optional</sup> <a name="metastoreServiceConfigInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput"></a>

```typescript
public readonly metastoreServiceConfigInput: GoogleBigqueryConnectionSparkMetastoreServiceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

---

##### `sparkHistoryServerConfigInput`<sup>Optional</sup> <a name="sparkHistoryServerConfigInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput"></a>

```typescript
public readonly sparkHistoryServerConfigInput: GoogleBigqueryConnectionSparkSparkHistoryServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionSpark;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

---


### GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference <a name="GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster">resetDataprocCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataprocCluster` <a name="resetDataprocCluster" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```typescript
public resetDataprocCluster(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataprocClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataprocCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataprocClusterInput`<sup>Optional</sup> <a name="dataprocClusterInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```typescript
public readonly dataprocClusterInput: string;
```

- *Type:* string

---

##### `dataprocCluster`<sup>Required</sup> <a name="dataprocCluster" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```typescript
public readonly dataprocCluster: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionSparkSparkHistoryServerConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

---


### GoogleBigqueryConnectionTimeoutsOutputReference <a name="GoogleBigqueryConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktf/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

---



